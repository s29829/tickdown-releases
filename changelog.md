# TickDown – historia zmian

## 0.2.17 – 2026-11-22

- Nowy kafelek „Wydarzenie” – spotkanie, rozmowa, termin, urodziny, impreza, podróż, wizyta, sport, egzamin – z dużą ilustracją typu, datą, odliczaniem i alarmem
- Kafelek przeciągnięty na kalendarz otwiera okno wydarzenia z alarmem w dniu, nad którym go upuszczono (kalendarz nie odsuwa się przy przeciąganiu); notatki i listy można też przypomnieć „za chwilę”, bez wpisu w kalendarzu
- Wydarzenia całodniowe mogą przypominać „w dniu o 9:00” albo dzień wcześniej
- Kalendarz wszystkich przestrzeni na ekranie głównym i przycisk „Kalendarz” w panelu bocznym
- Ikonka warstw przy nazwie kalendarza: włączasz i wyłączasz wydarzenia, liczniki i listy, a w projekcie Gantta także kamienie milowe, etapy, początki, końce i przedziały zadań
- Jeden kolor dla każdego elementu: kolor ustawiony na kafelku albo na wykresie Gantta widać też na pasku i ikonie wykresu, w kalendarzu i w powiązanych wydarzeniach
- Nowe ikony rodzajów kafelków w stylu Material w całej aplikacji – do wyboru kolorowe albo proste (Ustawienia → Wygląd)
- Wydarzenia zapisane w Kalendarzu Google są tam zwykłymi wydarzeniami, a TickDown pamięta, do której przestrzeni należą
- Okno mini pokazuje jedną przestrzeń – przełącznik przestrzeni na górze w każdym układzie; ikonka po nazwie przestrzeni otwiera jej konfigurator: moduł główny i widoczne miniaturki
- Okno mini z modułem głównym zawsze coś pokazuje: najbliższe odliczanie, a gdy nic nie odlicza – zegar; pod spodem do 6 miniaturek, w liście i pasku do 9
- Kurs nauki w oknie mini: postęp ścieżki, bieżąca sesja, ▶ otwiera lekcję, ■ zatrzymuje kurs
- Projekt Gantta w oknie mini: ile zostało do końca projektu, upływ czasu, bieżący i następny etap

## 0.2.16 – 2026-11-22

- Naprawiono wczytywanie wbudowanych paczek nauki i kursów w launcherze (komunikat „Nie udało się wczytać paczki”)

## 0.2.15 – 2026-11-22

- Zakładki przestrzeni nad tablicą: kilka przestrzeni otwartych naraz, przełączanie Cmd/Ctrl+1…9 i Ctrl+Tab, zapamiętywane po ponownym uruchomieniu (opcja w Ustawieniach); ikonka palety na zakładce zmienia wygląd przestrzeni
- Menu przestrzeni pod prawym przyciskiem (panel boczny, zakładka, ekran główny): otwórz, zmień nazwę w miejscu, ustawienia, wklej box, duplikuj, zamknij zakładkę, usuń
- Duplikowanie kafelka (grupa – z całą zawartością) i całej przestrzeni z układem tablicy
- Skróty klawiszowe na kafelkach: kopiuj / wklej box i zawartość, duplikuj, edytuj, zmień nazwę (F2), usuń; kliknięcie zaznacza kafelek, Enter go edytuje, Esc odznacza; lista skrótów w Ustawieniach → Ogólne
- Nazwę karty zmienisz dwuklikiem wprost na kafelku; ikonka na końcu nazwy otwiera dymek z typem, proporcjami, skórką i kolorem
- Listy do zrobienia: pozycje edytujesz wprost na kafelku, Enter dodaje kolejną, Tab / Shift+Tab robi podpunkty, uchwyt ⋮⋮ przeciąga pozycję razem z podpunktami
- Gantt: własny kolor paska (kliknięcie paska albo okno harmonogramu) i linii powiązania; dwuklik w pasek otwiera harmonogram
- Ekran główny: do wyboru kafelki, małe kafelki albo lista przestrzeni
- Okno „O aplikacji” i stopka strony pokazują autora i pomysłodawców

## 0.2.14 – 2026-11-22

- Nauka: kafelek „Kurs” planuje sesje (ścieżka temat po temacie, powtórki), przypomina o porze lekcji i pokazuje postęp; lekcja otwiera się w osobnym oknie z materiałami
- Nauka: nowe notatniki do ćwiczeń – test z odpowiedziami do wyboru i wyjaśnieniem, zdania z lukami oraz dopasowywanie par; wynik i najlepszy rezultat są zapamiętywane
- Nauka: 13 gotowych kursów (angielski B1 i B2, Python, SQL, Git, Scrum, PRINCE2, UML, statystyka…), własne paczki z pliku JSON / ZIP lub z adresu oraz prompt dla AI, który przygotuje kurs na dowolny temat
- Kafelki: zatrzymaj kursor na nazwie karty (na dotyku – stuknij), by zmienić typ (widok zegara, rodzaj notatki lub listy), proporcje, skórkę i kolor dominujący
- Kafelki: każdy rodzaj ma swoje dozwolone proporcje i wielkość domyślną (np. zegar okrągły – kwadrat, cyfrowy – poziomy prostokąt, kalendarz także 6×2); w Ustawieniach → Kafelki można je zawęzić i zmienić domyślną
- Menu pod prawym przyciskiem myszy na karcie: kopiuj i wklej box, kopiuj i wklej zawartość (także tekst z innych programów do notatek i list), edytuj, usuń i przenieś do innej przestrzeni lub grupy

## 0.2.13 – 2026-11-21

- Wykres Gantta: każdy nowy element tablicy (licznik, lista, notatnik) od razu trafia na wykres – element bez własnego czasu dostaje jeden dzień pracy
- Wykres Gantta: w wierszu ✎ otwiera edycję czasu, godzin pracy i powiązań, a ✕ usuwa element z wykresu (na tablicy zostaje)
- Wykres Gantta: przycisk + przywraca usunięte elementy; można też przeciągnąć kartę na wykres – jeśli już na nim jest, pojawi się komunikat
- Ustawienia kafelka wykresu: tabela wszystkich elementów – widoczność, kolejność, nazwa, zakres dat, czas pracy, godziny pracy i powiązania w jednym miejscu, a także „Importuj wszystkie” i „Wyczyść wykres”
- macOS: w obrazie instalacyjnym jest instrukcja instalacji (PL/EN)

## 0.2.12 – 2026-11-21

- Pasek statusu na dole tablicy: przestrzeń lub grupa, liczba elementów i najbliższy koniec odliczania; najechanie wysuwa paletę elementów
- Paleta: element chwycisz szybciej – wystarczy krótkie przytrzymanie albo ruch w górę, w stronę tablicy
- Kalendarz Google: osobna kategoria w Ustawieniach, wczytywanie pliku JSON klienta OAuth i lista kalendarzy na koncie; po połączeniu kafelki kalendarza od razu dostają kalendarz główny
- Ustawienia: czytelniejsze opisy własnego wyglądu przestrzeni i własnych skórek, pola koloru w całości wypełnione próbką
- Strona TickDown: podgląd jako slider (notatki, projekt, licznik), wybór koloru strony, przełącznik języka z flagami i historia zmian po angielsku

## 0.2.11 – 2026-11-21

- Tablica z dowolnym układem: przeciągnij kartę za jej wolny fragment na dowolne pole – sąsiednie karty same robią miejsce, a puste pola mogą zostać; Esc anuluje przeciąganie
- Wielkość karty zmienisz, ciągnąc za prawy dolny róg – karta przyciąga się do dostępnych rozmiarów
- Paleta na dole okna: ikony liczników, list i notatników – kliknij, żeby dodać element w pierwszym wolnym polu, albo przytrzymaj i upuść w wybranym miejscu tablicy
- Notatniki: karteczka post-it (pismo odręczne, kolor papieru), czysty tekst, Markdown (pogrubienie, listy, zadania do odhaczania, bezpieczne linki – edycja graficzna albo w kodzie), hasła przewijane i fiszki obracane kliknięciem – wszystko pisane wprost na kafelku
- Grupy: kafelek grupy to kolejna tablica na tablicy – wrzucaj do niej liczniki, listy i notatki, zagnieżdżaj grupy; ścieżka nad tablicą i drzewo w panelu bocznym ułatwiają poruszanie się
- Wykresy Gantta: grupa albo cała przestrzeń może być projektem z osią czasu – paski zadań przesuniesz i rozciągniesz myszą, połączysz zadania zależnościami (twarde przesuwają kolejne zadania), uwzględniane są godziny pracy; gotowe projekty w oknie nowej przestrzeni
- Statystyki: kafelek ze stanem tablicy lub grupy – każda nowa przestrzeń dostaje go automatycznie
- Ekran główny: przegląd wszystkich przestrzeni z podglądem tablic i statystykami albo start od razu w wybranej przestrzeni
- Szybka zmiana skórki: zatrzymaj kursor na karcie na 2 sekundy – pojawią się miniaturki skórek, najechanie pokazuje podgląd, kliknięcie zapisuje
- Okno mini: przesuwane bez ramki „dopasuj do połowy ekranu”, zatrzymuje się na krawędzi ekranu, a dociśnięte do lewej lub prawej krawędzi chowa się jako mała zakładka z czasem – kliknięcie ją rozwija
- Pasek menu: liczniki w menu ikonki pogrupowane według przestrzeni (przy wielu licznikach – podmenu przestrzeni); notatniki i grupy się tam nie pojawiają
- Zestawy startowe: przed utworzeniem tablicy możesz zmienić jej skład – wielkość kart, ustawienia elementów, duplikaty, usuwanie i dodawanie nowych
- Kalendarz: kafelek z widokiem miesiąca, tygodnia i dnia – wydarzenia z przypomnieniami i powtórzeniami, na kalendarzu widać też terminy liczników i list; opcjonalnie połączenie z Kalendarzem Google
- Aktualizacje: TickDown sam sprawdza, czy jest nowa wersja (codziennie, co tydzień albo tylko ręcznie – Ustawienia → Ogólne → Aktualizacje) i w rogu okna proponuje jej pobranie; wybraną wersję możesz pominąć
- Nowa strona TickDown: tablica, listy, notatki, kalendarz i zarządzanie projektami z wykresem Gantta – z interaktywnym podglądem

## 0.2.10 – 2026-11-20

- Zestawy startowe przy pierwszym uruchomieniu: Uczeń, Student, Praca w biurze, Praca zdalna, Millenials, Rodzic, Senior, Sport i zdrowie – gotowe liczniki i listy z dopasowanym stylem, czcionką i skórkami
- Po wybraniu zestawu: podgląd tablicy, wybór stylu aplikacji i miniaturki schematów kolorystycznych (polecane dla zestawu na początku) – zmiany widać od razu
- Zestaw startowy wybierzesz też później w Ustawieniach → Ogólne (obecne liczniki trafią do archiwum albo zostaną)
- Nowy układ okna zestawów: po lewej wybór, po prawej pomniejszona tablica z kartami w docelowych wielkościach i listą zawartości
- Karty w zestawach ułożone według ważności – najważniejszy licznik i główna lista są największe, a całość wypełnia tablicę bez pustych miejsc
- Większe okno aplikacji przy starcie (1240×800), dopasowane do niego okna ustawień i zestawów
- Nowy układ kafelków liczników: na małym kwadracie zegar i pierścień wypełniają całą kartę (bez ikony i opisu), a przyciski Start i Reset są mniejsze i mieszczą się w środku tarczy; na dużych poziomych kafelkach zegar jest na środku, a przyciski po bokach; na pionowych przyciski są tuż pod zegarem; liczniki bez przycisków pokazują obok zegara większą ikonę i opis; na kafelku 2×2 zegar zajmuje całą wysokość, a przyciski stoją w rogach pod nim; zegar cyfrowy, klapki, sekundy, pasek i opis słowny wypełniają całą szerokość lub wysokość kafelka
- Listy na kafelku: dopisuj nowe pozycje polem na dole listy (w zakupach „2 kg ziemniaki” uzupełni ilość) i usuwaj je przyciskiem ✕ – także gdy lista jest pusta
- Przestrzenie: w panelu bocznym pod nazwą aplikacji utworzysz osobne tablice, np. „Główny”, „Szkoła”, „Dom” – każda z własnymi licznikami i listami
- Nowa przestrzeń na jednym ekranie: nazwa, ikona, rodzaj (Uczeń, Student, Senior… albo pusta tablica), styl i kolory; nazwa wpisuje się sama – z kolejnym numerem, gdy taka już jest (np. „Student 2”); przestrzeń może mieć własny wygląd (kolory, styl, czcionka zegara)
- Licznik przeniesiesz do innej przestrzeni w jego ustawieniach; alarmy i przypomnienia działają we wszystkich przestrzeniach naraz

## 0.2.9 – 2026-11-19

- Listy na kafelku: nazwa listy i przewijana lista z polami wyboru – odhaczaj pozycje jako załatwione albo odznaczaj, bez otwierania okna
- Czas dla list jest teraz opcją: nowa lista domyślnie nie ma przypomnienia; z przypomnieniem zegar jest mniejszy niż w licznikach czasu, a pozycje listy mają większą czcionkę dopasowaną do kafelka
- Nowy układ kafelka: u góry tylko nazwa i ikonki (kształt, edycja, archiwum, usuń), ikona i opis na dole
- Kształt i wielkość kafelka zmienisz z dymka pod przyciskiem kształtu – nie zasłania już ikonek ani przycisków
- Równe przyciski na wszystkich kafelkach (Start, Pauza, Reset, Weź teraz, Otwórz listę) – ich wielkość zależy od wielkości kafelka
- Gotowe schematy leków od razu z przykładowymi lekami (np. 3× dziennie: Tabletki 1 i Syrop 2) – wystarczy zmienić nazwy i dawki
- Kafelek leków lepiej wykorzystuje miejsce: większe napisy i tabletki na dużych kafelkach, na szerokim kafelku zegar po lewej, leki po prawej
- Pasek menu macOS: gdy licznik ma własną ikonę, ikonka aplikacji się chowa; bez ikony licznika (lub bez licznika) ikonka jest widoczna
- Okno mini floating samo dopasowuje wysokość do liczby liczników, a gdy brakuje miejsca na ekranie, zmniejsza licznik główny
- Ustawienia → Ogólne: reset aplikacji – liczniki trafiają do archiwum, ustawienia wracają do domyślnych

## 0.2.8 – 2026-11-19

- Nowy panel boczny po lewej: Nowy licznik, Nowa lista, Archiwum, Mini i Ustawienia – z opisami albo same ikony
- Nowy licznik w dwóch krokach: wybierz rodzaj z kafelków (nazwa jest opcjonalna), potem ustawienia
- Gotowe propozycje dla każdego rodzaju: pobudka, lunch, pora snu, minutniki od 5 s do 2 h, praca 8–16 i 9–17, rozciąganie co 45 min, najbliższe święta, pory roku, listy zakupów – ustawienia i kolory wypełniają się same
- Konfigurator leków: wybierz, ile razy dziennie – godziny zaproponują się same; potem ten sam zestaw leków o każdej godzinie albo osobny dla każdej

## 0.2.7 – 2026-11-19

- Nowy układ okna mini – floating: jeden duży licznik główny (nazwa, do kiedy, odliczanie i przyciski start / pauza / reset), a pod nim pozostałe liczniki jako małe kafelki z czasem w skrócie, po 3 w wierszu
- Kliknięcie kafelka robi z niego licznik główny; kolejność kafelków ustawisz w Ustawieniach → Okno mini
- Licznik główny może mieć własną formę prezentacji, czcionkę i kolor akcentu
- Przycisk ⇄ w oknie mini przełącza układy: lista, pasek, floating

## 0.2.6 – 2026-11-19

- Licznik leków: harmonogram dla każdego leku (godziny, co X h z przerwą nocną, do posiłków), dni tygodnia / miesiąca, co N dni, cykle np. 21/7, kuracja od–do, gotowe szablony
- Alarm dawki z potwierdzeniem i historią; brakujący lek można od razu dopisać do listy zakupów
- Listy do zrobienia i zakupów (ilość, jednostka, grupa) z przypomnieniem – wpisz „2 kg ziemniaki”, reszta uzupełni się sama
- Archiwum zamkniętych liczników: przywracanie i usuwanie
- Liczniki pracy i tygodnia: osobne skórki na pracę i czas wolny, domyślne nazwy „Praca” / „Czas wolny”

## 0.2.5 – 2026-11-18

- Nowa nazwa: TickDown (dawniej Odliczacz) – ustawienia i skórki przenoszą się automatycznie
- Okno mini zawsze na wierzchu: lista w 1–3 kolumnach albo pasek w 1–3 wierszach, napisy skalują się z oknem
- Menu ikonki w pasku menu: pokaż okno, okno mini, liczniki z formą prezentacji, szybka zmiana motywu
- Godziny pracy: osobna nazwa licznika w pracy i poza nią
- Ustawienia i okno licznika podzielone na kategorie, z przyciskami Zapisz / Anuluj
- Konfigurator kolorów skórek, wybór kolorystyki ikony w Docku

## 0.2.4 – 2026-11-18

- Interfejs po angielsku – język dobierany według ustawień systemu
- Ikona w Docku rysowana na żywo: stoper z postępem albo cyfry odliczania najbliższego licznika
- Moment startu odliczania – postęp liczony od chwili ustawienia licznika

## 0.2.3 – 2026-11-17

- Licznik „Tydzień / weekend”: do piątku 17:00, potem do niedzieli 24:00 – powiadomienia na przejściach, automatyczne skórki praca / weekend
- Pięć stylów aplikacji: Klasyczny, Szkło, Bento, Minimalistyczny, Miękki (Ustawienia → Wygląd aplikacji)
- Osiem nowych motywów kolorów: Północ, Zorza, Śnieg, Mięta, Lawenda, Sorbet, Kawa, Grafit nowoczesny
- 15 nowych czcionek zegara, w tym 12 wbudowanych w aplikację (licencja OFL)
- 14 nowych skórek (m.in. LCD, Terminal, Nixie, Cyber, Bauhaus) i 77 ikon w grupach tematycznych

## 0.2.2 – 2026-11-17

- Odliczanie do świąt: Polska (10), Europa, Wielka Brytania, USA i Chiny (po 5) oraz własne uroczystości (jednorazowo lub co roku)
- Odliczanie do następnej (lub wybranej) pory roku – astronomiczny początek z dokładnością do minuty
- 17 skórek świątecznych dobieranych automatycznie do święta / pory roku
- Sześć wielkości kart: mały kwadrat, kwadrat, pion i poziom mały, pion i poziom duży; widoki skalują się do karty
- Przy odliczaniu dłuższym niż doba wszystkie widoki pokazują liczbę dni; przypomnienia „1 tydzień” i „1 dzień” przed świętem

## 0.2.1 – 2026-11-16

- Plakietka na ikonie w Docku: liczba aktywnych liczników i czas do najbliższego końca (np. `3 · 12:34`)
