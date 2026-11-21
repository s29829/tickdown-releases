// Strona TickDown – język PL/EN, podgląd (zakładki: licznik, projekt z wykresem Gantta, notatki i listy), pliki do pobrania (najnowsze wydanie z GitHuba),
// „Co nowego” (changelog.json) i głosowanie (zgłoszenia z etykietą „glosowanie” w repo wydań).
(() => {
  const REPO = 's29829/tickdown-releases';
  const GH = `https://github.com/${REPO}`;
  const API = `https://api.github.com/repos/${REPO}`;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- język ---------- */
  const nodes = [...document.querySelectorAll('[data-en]')];
  nodes.forEach((n) => { n.dataset.pl = n.innerHTML; });
  let lang = '';
  try { lang = localStorage.getItem('td-lang') || ''; } catch { /* brak dostępu */ }
  if (!lang) lang = (navigator.language || 'pl').toLowerCase().startsWith('pl') ? 'pl' : 'en';
  const T = {
    pl: { download: 'Pobierz na macOS', soon: 'wkrótce', avail: 'dostępne', none: 'Pierwsze wydanie w przygotowaniu.',
      latest: 'Najnowsze wydanie', all: 'wszystkie wydania', err: 'Nie udało się pobrać listy plików.', open: 'Otwórz stronę wydań',
      until: 'do', weekendNow: 'trwa!', d: 'd', rosetta: 'Na Macach z Apple Silicon działa przez Rosettę 2.',
      universal: 'Apple Silicon i Intel', intel: 'Intel · Apple Silicon przez Rosettę', arm: 'Apple Silicon', portable: 'archiwum',
      winNote: 'Wersja na Windows 10 i 11 jest w przygotowaniu.', androidNote: 'Wersja na telefony i tablety z Androidem jest w przygotowaniu.',
      wantIt: 'Chcę tę wersję 👍', votes: (n) => n === 1 ? '1 głos' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? `${n} głosy` : `${n} głosów`,
      noVotes: 'Brak propozycji – zgłoś pierwszą!', votesErr: 'Głosy zobaczysz na GitHubie:', votesLink: 'lista zgłoszeń',
      free: 'Za darmo', soonPlat: 'wkrótce Windows i Android', more: 'Pełna historia zmian', version: 'Wersja',
      g: { analysis: 'Analiza', req: 'Wymagania', mock: 'Makiety', build: 'Realizacja', ui: 'Interfejs', logic: 'Logika', tests: 'Testy', launch: 'Wydanie ◆' },
      progress: (n) => `postęp ${n}%` },
    en: { download: 'Download for macOS', soon: 'coming soon', avail: 'available', none: 'The first release is on its way.',
      latest: 'Latest release', all: 'all releases', err: 'Could not load the file list.', open: 'Open the releases page',
      until: 'until', weekendNow: 'now!', d: 'd', rosetta: 'Runs on Apple Silicon Macs via Rosetta 2.',
      universal: 'Apple Silicon and Intel', intel: 'Intel · Apple Silicon via Rosetta', arm: 'Apple Silicon', portable: 'archive',
      winNote: 'A version for Windows 10 and 11 is in the works.', androidNote: 'A version for Android phones and tablets is in the works.',
      wantIt: 'I want this 👍', votes: (n) => n === 1 ? '1 vote' : `${n} votes`,
      noVotes: 'No suggestions yet – be the first!', votesErr: 'See the votes on GitHub:', votesLink: 'issue list',
      free: 'Free', soonPlat: 'Windows and Android coming soon', more: 'Full changelog', version: 'Version',
      g: { analysis: 'Analysis', req: 'Requirements', mock: 'Mockups', build: 'Build', ui: 'Interface', logic: 'Logic', tests: 'Testing', launch: 'Launch ◆' },
      progress: (n) => `${n}% done` },
  };
  const t = (k) => T[lang][k];

  const langBtn = $('lang');
  function applyLang() {
    document.documentElement.lang = lang;
    nodes.forEach((n) => { n.innerHTML = lang === 'en' ? n.dataset.en : n.dataset.pl; });
    if (langBtn) langBtn.textContent = lang === 'en' ? 'PL' : 'EN';
    renderAll();
  }
  langBtn?.addEventListener('click', () => {
    lang = lang === 'en' ? 'pl' : 'en';
    try { localStorage.setItem('td-lang', lang); } catch { /* brak dostępu */ }
    applyLang();
  });
  if ($('year')) $('year').textContent = new Date().getFullYear();

  /* ---------- podgląd licznika ---------- */
  const pad = (n) => String(n).padStart(2, '0');
  const hms = (ms) => { const s = Math.max(0, Math.floor(ms / 1000)); return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`; };
  const days = (ms) => `${Math.ceil(ms / 86400000)} ${t('d')}`;
  const ARC = 326.7;
  function tick() {
    if (!$('demo-time')) return;
    const now = new Date();
    const at = (d, h) => { const x = new Date(d); x.setHours(h, 0, 0, 0); return x; };
    // praca 9–17: przed 9 – do 9, w pracy – do 17, po 17 – do 9 następnego dnia
    let start, end, label;
    const h = now.getHours();
    if (h < 9) { start = at(now, 17); start.setDate(start.getDate() - 1); end = at(now, 9); label = '9:00'; }
    else if (h < 17) { start = at(now, 9); end = at(now, 17); label = '17:00'; }
    else { start = at(now, 17); end = at(now, 9); end.setDate(end.getDate() + 1); label = '9:00'; }
    const left = end - now, total = end - start;
    $('demo-time').textContent = hms(left);
    if ($('board-time')) $('board-time').textContent = hms(left).slice(0, 5);
    $('demo-sub').textContent = `${t('until')} ${label}`;
    $('demo-arc').setAttribute('stroke-dashoffset', String(ARC * (1 - (total - left) / total)));
    const dow = now.getDay();
    const fri = at(now, 17); fri.setDate(fri.getDate() + ((5 - dow + 7) % 7));
    const inWeekend = dow === 6 || dow === 0 || (dow === 5 && h >= 17);
    $('demo-weekend').textContent = inWeekend ? t('weekendNow') : (fri - now < 86400000 ? hms(fri - now) : days(fri - now));
    let x = new Date(now.getFullYear(), 11, 24); if (x < now) x = new Date(now.getFullYear() + 1, 11, 24);
    $('demo-xmas').textContent = days(x - now);
    $('demo-ny').textContent = days(new Date(now.getFullYear() + 1, 0, 1) - now);
  }
  setInterval(tick, 1000);

  /* ---------- zakładki podglądu (same się zmieniają, dopóki ktoś nie kliknie) ---------- */
  const tabs = [...document.querySelectorAll('.demo-tab')];
  function showDemo(id) {
    tabs.forEach((b) => b.setAttribute('aria-selected', String(b.dataset.demo === id)));
    document.querySelectorAll('.demo-panel').forEach((p) => { p.hidden = p.dataset.panel !== id; });
  }
  let rotate = tabs.length && !matchMedia('(prefers-reduced-motion: reduce)').matches ? setInterval(() => {
    const i = tabs.findIndex((b) => b.getAttribute('aria-selected') === 'true');
    showDemo(tabs[(i + 1) % tabs.length].dataset.demo);
  }, 7000) : null;
  const stopRotate = () => { clearInterval(rotate); rotate = null; };
  tabs.forEach((b) => b.addEventListener('click', () => { stopRotate(); showDemo(b.dataset.demo); }));
  document.querySelector('.demo')?.addEventListener('pointerdown', stopRotate);
  const card = $('flashcard');
  card?.addEventListener('click', () => {
    card.classList.toggle('flipped');
    card.textContent = card.classList.contains('flipped') ? card.dataset.back : card.dataset.front;
  });

  /* ---------- wykres Gantta: 10 dni roboczych od poniedziałku tego tygodnia, linia „teraz” ---------- */
  // s / e – początek i koniec w dniach roboczych, dep – wiersz poprzednika, stage – etap (podgrupa), ms – kamień milowy
  const ROWS = [
    { k: 'analysis', s: 0, e: 2, stage: true },
    { k: 'req', s: 0, e: 1 },
    { k: 'mock', s: 1, e: 2, dep: 1 },
    { k: 'build', s: 2, e: 8, stage: true },
    { k: 'ui', s: 2, e: 5, dep: 2 },
    { k: 'logic', s: 3, e: 6.5, dep: 2 },
    { k: 'tests', s: 6.5, e: 8, dep: 5 },
    { k: 'launch', s: 8.5, e: 8.5, ms: true, dep: 6 },
  ];
  const DAYS = 10;
  function ganttNow(now) {
    const dow = now.getDay();
    if (dow === 0 || dow === 6) return 5; // weekend – po piątku
    const h = now.getHours() + now.getMinutes() / 60;
    return dow - 1 + Math.min(1, Math.max(0, (h - 9) / 8));
  }
  function renderGantt() {
    const boxes = document.querySelectorAll('[data-gantt]');
    if (!boxes.length) return;
    const now = new Date();
    const pos = ganttNow(now);
    const mon = new Date(now); mon.setHours(0, 0, 0, 0);
    mon.setDate(mon.getDate() - ((now.getDay() + 6) % 7));
    const loc = lang === 'en' ? 'en-GB' : 'pl-PL';
    const days = [];
    for (let i = 0, d = new Date(mon); days.length < DAYS; d.setDate(d.getDate() + 1)) {
      if (d.getDay() === 0 || d.getDay() === 6) continue;
      const wd = d.toLocaleDateString(loc, { weekday: 'short' }).replace('.', '');
      days.push(`<span class="${d.toDateString() === now.toDateString() ? 'today' : ''}">${esc(wd)} ${d.getDate()}</span>`);
      i++;
    }
    const total = ROWS.filter((r) => !r.stage && !r.ms).reduce((a, r) => a + (r.e - r.s), 0);
    const done = ROWS.filter((r) => !r.stage && !r.ms).reduce((a, r) => a + Math.min(r.e - r.s, Math.max(0, pos - r.s)), 0);
    document.querySelectorAll('[data-gantt-progress]').forEach((el) => { el.textContent = t('progress')(Math.round((done / total) * 100)); });
    boxes.forEach((box) => {
      const row = parseFloat(getComputedStyle(box).getPropertyValue('--row')) || 30;
      const rows = ROWS.map((r) => {
        const fill = r.ms ? 0 : Math.min(1, Math.max(0, (pos - r.s) / (r.e - r.s)));
        const mark = r.ms ? `<span class="g-ms" data-l="${r.s * 10}"></span>`
          : `<span class="g-bar" data-l="${r.s * 10}" data-w="${(r.e - r.s) * 10}"><i data-w="${Math.round(fill * 100)}"></i></span>`;
        return `<div class="g-row${r.stage ? ' stage' : ''}"><span class="g-name">${esc(t('g')[r.k])}</span><div class="g-track">${mark}</div></div>`;
      }).join('');
      const links = ROWS.map((r, i) => {
        if (r.dep == null) return '';
        const p = ROWS[r.dep];
        const x1 = p.e * 10, y1 = (r.dep + 0.5) * row, x2 = r.s * 10, y2 = (i + 0.5) * row, xm = Math.max(x1, x2) + 1.2;
        return `<path vector-effect="non-scaling-stroke" d="M${x1} ${y1}H${xm}V${y2}H${x2 + (r.ms ? 0 : 0.4)}"/>`;
      }).join('');
      box.innerHTML = `<div class="g-head"><span></span><div class="g-days">${days.join('')}</div></div>${rows}
        <svg class="g-links" viewBox="0 0 100 ${ROWS.length * row}" preserveAspectRatio="none" height="${ROWS.length * row}">${links}</svg>
        <span class="g-now" data-now></span>`;
      // położenie przez CSSOM – atrybut style w HTML blokuje CSP (style-src 'self')
      box.querySelectorAll('[data-l]').forEach((el) => { el.style.left = `${el.dataset.l}%`; });
      box.querySelectorAll('[data-w]').forEach((el) => { el.style.width = `${el.dataset.w}%`; });
      box.querySelector('[data-now]').style.left = `calc(var(--label) + (100% - var(--label)) * ${pos / DAYS})`;
    });
  }
  setInterval(renderGantt, 60 * 1000);

  /* ---------- dane ---------- */
  const getJson = (url) => fetch(url, { headers: { Accept: 'application/vnd.github+json' } })
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)));
  let release = null, releaseFailed = false, changelog = null, issues = null, issuesFailed = false;

  /* ---------- pobieranie (tylko macOS; Windows i Android – wkrótce) ---------- */
  const ICONS = {
    mac: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.6 1.3-.1 1.7-.8 3.3-.8 1.5 0 1.9.8 3.3.8 1.4 0 2.2-1.2 3-2.5.9-1.4 1.3-2.8 1.4-2.8-.1 0-2.6-1-2.6-4.4ZM14 5.4c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z"/></svg>',
    win: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5 10.5 4.5v7H3v-6Zm0 13 7.5 1v-7H3v6Zm8.5 1.1L21 21v-8.5h-9.5v7.1Zm0-15.2v7.1H21V3l-9.5 1.4Z"/></svg>',
    android: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.5 19.4 6.4a.4.4 0 0 0-.7-.4l-1.8 3.1A11 11 0 0 0 12 8a11 11 0 0 0-4.9 1.1L5.3 6a.4.4 0 0 0-.7.4l1.8 3.1A9.9 9.9 0 0 0 1.5 17h21a9.9 9.9 0 0 0-4.9-7.5ZM7 14.3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>',
  };
  function classify(a) {
    const n = a.name.toLowerCase();
    const arch = n.includes('universal') ? 'universal' : (n.includes('aarch64') || n.includes('arm64')) ? 'arm' : 'intel';
    if (n.endsWith('.dmg')) return { label: '.dmg', arch, rank: 0 };
    if (n.endsWith('.app.zip')) return { label: '.zip', arch, rank: 1, kind: 'portable' };
    return null;
  }
  const mb = (b) => `${(b / 1048576).toFixed(1)} MB`;
  const voteIssue = (word) => (issues || []).find((i) => hasLabel(i, 'platforma') && i.title.toLowerCase().includes(word));
  const voteUrl = (word) => voteIssue(word)?.html_url || `${GH}/issues?q=is%3Aissue+is%3Aopen+label%3Aplatforma`;

  function renderDownloads() {
    const box = $('platforms');
    if (!box) return;
    const files = (release?.assets || []).map((a) => ({ ...classify(a), a })).filter((f) => f.label).sort((x, y) => x.rank - y.rank);
    const list = files.map((f) => `<a class="file" href="${esc(f.a.browser_download_url)}"><span>${f.label}</span><small>${t(f.arch)} · ${mb(f.a.size)}</small></a>`).join('');
    const note = files.length && files.every((f) => f.arch === 'intel') ? `<p class="note">${t('rosetta')}</p>` : '';
    const soonCard = (key, name, noteKey, word) => `<div class="card plat">
      <div class="plat-head">${ICONS[key]}<h3>${name}</h3><span class="badge">${t('soon')}</span></div>
      <p class="note">${t(noteKey)}</p>
      <a class="btn ghost" href="${esc(voteUrl(word))}">${t('wantIt')}</a></div>`;
    box.innerHTML = `<div class="card plat">
        <div class="plat-head">${ICONS.mac}<h3>macOS</h3><span class="badge ${files.length ? 'ok' : ''}">${files.length ? t('avail') : t('soon')}</span></div>
        ${files.length ? `<div class="files">${list}</div>${note}`
          : `<p class="note">${releaseFailed && !release ? `${t('err')} <a href="${GH}/releases">${t('open')}</a>` : t('none')}</p>`}
      </div>${soonCard('win', 'Windows', 'winNote', 'windows')}${soonCard('android', 'Android', 'androidNote', 'android')}`;

    $('relinfo').innerHTML = release
      ? `${t('latest')}: <b>${esc(release.tag_name)}</b> · ${new Date(release.published_at).toLocaleDateString(lang === 'en' ? 'en-GB' : 'pl-PL')} · <a href="changelog.html">${t('more').toLowerCase()}</a> · <a href="${GH}/releases">${t('all')}</a>`
      : `<a href="${GH}/releases">${t('all')}</a>`;

    const best = files[0];
    $('hero-dl').href = best ? best.a.browser_download_url : '#pobierz';
    $('hero-dl-text').textContent = t('download');
    $('hero-hint').textContent = `${release ? `${release.tag_name} · ` : ''}${t('free')} · macOS 11+ · ${t('soonPlat')}`;
  }

  /* ---------- co nowego ---------- */
  function renderNews() {
    const box = $('news');
    if (!box || !changelog?.length) return;
    const v = changelog[0];
    box.innerHTML = `<h3>${t('version')} ${esc(v.version)}</h3><span class="small">${esc(v.date)}</span>
      <ul>${v.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      <a class="more" href="changelog.html">${t('more')} →</a>`;
  }

  /* ---------- głosowanie ---------- */
  const hasLabel = (i, name) => i.labels.some((l) => (typeof l === 'string' ? l : l.name) === name);
  function renderVotes() {
    const boxes = { platforma: $('votes-platform'), funkcja: $('votes-feature') };
    if (!boxes.platforma) return;
    for (const [label, box] of Object.entries(boxes)) {
      if (issuesFailed && !issues) {
        box.innerHTML = `<p class="small">${t('votesErr')} <a href="${GH}/issues?q=is%3Aissue+is%3Aopen+label%3Aglosowanie">${t('votesLink')}</a></p>`;
        continue;
      }
      if (!issues) continue;
      const items = issues.filter((i) => hasLabel(i, label)).sort((a, b) => (b.reactions?.['+1'] || 0) - (a.reactions?.['+1'] || 0) || a.number - b.number);
      const max = Math.max(1, ...items.map((i) => i.reactions?.['+1'] || 0));
      box.innerHTML = items.length ? items.map((i) => {
        const n = i.reactions?.['+1'] || 0;
        const title = i.title.replace(/^(Platforma|Funkcja|Platform|Feature):\s*/i, '');
        return `<a class="vote" href="${esc(i.html_url)}"><b>${esc(title)}</b><span class="cnt">👍 ${t('votes')(n)}</span><span class="bar"><i data-w="${Math.round((n / max) * 100)}"></i></span></a>`;
      }).join('') : `<p class="small">${t('noVotes')}</p>`;
      // szerokość przez CSSOM – atrybut style w HTML blokuje CSP (style-src 'self')
      box.querySelectorAll('[data-w]').forEach((el) => { el.style.width = `${el.dataset.w}%`; });
    }
  }

  function renderAll() { tick(); renderGantt(); renderDownloads(); renderNews(); renderVotes(); }

  if ($('platforms')) {
    // najpierw API GitHuba; w razie błędu (np. limit zapytań) – release.json zapisany przy budowaniu strony
    getJson(`${API}/releases/latest`)
      .catch(() => getJson('release.json'))
      .then((j) => { release = j; }, () => { releaseFailed = true; })
      .finally(renderDownloads);
    getJson('changelog.json').then((j) => { changelog = j; renderNews(); }, () => {});
    getJson(`${API}/issues?labels=glosowanie&state=open&per_page=100`)
      .then((j) => { issues = j.filter((i) => !i.pull_request); }, () => { issuesFailed = true; })
      .finally(() => { renderVotes(); renderDownloads(); });
  }

  applyLang();
})();
