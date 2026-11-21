# TickDown – changelog

## 0.2.13 – 2026-11-21

- Gantt chart: every new board item (counter, list, notebook) appears on the chart right away – an item without its own time gets one working day
- Gantt chart: in each row ✎ edits the time, working hours and links, and ✕ removes the item from the chart (it stays on the board)
- Gantt chart: the + button brings removed items back; you can also drag a card onto the chart – if it's already there, you'll see a message
- Chart tile settings: a table of all items – visibility, order, name, date range, work time, working hours and links in one place, plus “Import all” and “Clear chart”
- macOS: the installer image now includes installation instructions (PL/EN)

## 0.2.12 – 2026-11-21

- Status bar at the bottom of the board: space or group, number of items and the nearest countdown end; hovering slides out the item palette
- Palette: grab items faster – a short press or a move up towards the board is enough
- Google Calendar: its own category in Settings, loading the OAuth client JSON file and the list of calendars on the account; once connected, calendar tiles get the primary calendar right away
- Settings: clearer descriptions of a space's own look and of your own skins, colour fields fully filled with the swatch
- TickDown website: preview as a slider (notes, project, timer), page colour picker, language switch with flags and an English changelog

## 0.2.11 – 2026-11-21

- Free-form board: drag a card by any free spot to any cell – neighbouring cards make room on their own and empty cells may stay; Esc cancels the drag
- Resize a card by dragging its bottom-right corner – it snaps to the available sizes
- Palette at the bottom of the window: icons of timers, lists and notebooks – click to add an item in the first free cell, or press and hold to drop it anywhere on the board
- Notebooks: sticky note (handwriting, paper colour), plain text, Markdown (bold, lists, tick-off tasks, safe links – visual or source editing), rotating phrases and flashcards flipped with a click – all written right on the tile
- Groups: a group tile is another board on the board – drop timers, lists and notes into it and nest groups; the path above the board and the sidebar tree help you find your way
- Gantt charts: a group or a whole space can be a project with a timeline – move and stretch task bars with the mouse, link tasks with dependencies (hard links push the following tasks), working hours are respected; ready-made projects in the new space window
- Statistics: a tile with the state of the board or a group – every new space gets one automatically
- Home screen: an overview of all spaces with board previews and statistics, or start straight in a chosen space
- Quick skin change: rest the cursor on a card for 2 seconds – skin thumbnails appear, hovering previews, clicking saves
- Mini window: moves without the “snap to half of the screen” frame, stops at the screen edge, and pushed against the left or right edge it hides as a small tab with the time – click to expand it
- Menu bar: timers in the icon menu grouped by space (with many timers – a submenu per space); notebooks and groups no longer appear there
- Starter sets: before the board is created you can change what is on it – card sizes, item settings, duplicates, removing and adding items
- Calendar: a tile with month, week and day views – events with reminders and repeats, plus the deadlines of timers and lists; optionally connected to Google Calendar
- Updates: TickDown checks for a new version by itself (daily, weekly or only manually – Settings → General → Updates) and offers the download in the corner of the window; you can skip a chosen version
- New TickDown website: board, lists, notes, calendar and project management with a Gantt chart – with an interactive preview

## 0.2.10 – 2026-11-20

- Starter sets on first launch: Pupil, Student, Office work, Remote work, Millennials, Parent, Senior, Sport and health – ready timers and lists with a matching style, font and skins
- After choosing a set: board preview, app style and colour scheme thumbnails (recommended ones first) – changes are visible right away
- You can also pick a starter set later in Settings → General (current timers go to the archive or stay)
- New layout of the starter set window: choices on the left, a scaled-down board with cards in their final sizes and a list of contents on the right
- Cards in the sets are arranged by importance – the main timer and the main list are the largest, and together they fill the board with no gaps
- Larger app window at launch (1240×800), with settings and starter set windows to match
- New timer tile layout: on a small square the clock and ring fill the whole card (no icon or caption) and the smaller Start and Reset buttons fit inside the dial; on large wide tiles the clock is centred with buttons on the sides; on tall tiles the buttons sit right below the clock; timers without buttons show a larger icon and caption next to the clock; on a 2×2 tile the clock takes the full height with buttons in the corners below; digital, flip, seconds, bar and words views fill the full width or height of the tile
- Lists on the tile: add items with the field at the bottom of the list (in shopping lists “2 kg potatoes” fills in the quantity) and remove them with ✕ – also when the list is empty
- Spaces: in the sidebar below the app name you can create separate boards, e.g. “Main”, “School”, “Home” – each with its own timers and lists
- New space on one screen: name, icon, type (Pupil, Student, Senior… or an empty board), style and colours; the name fills itself in – with a number when it already exists (e.g. “Student 2”); a space can have its own look (colours, style, clock font)
- Move a timer to another space in its settings; alarms and reminders work in all spaces at once

## 0.2.9 – 2026-11-19

- Lists on the tile: list name and a scrollable list with checkboxes – tick items off as done or untick them without opening a window
- Time for lists is now optional: a new list has no reminder by default; with a reminder the clock is smaller than on timers and list items use a larger font fitted to the tile
- New tile layout: only the name and small icons at the top (shape, edit, archive, delete), icon and caption at the bottom
- Change the tile shape and size from the popover under the shape button – it no longer covers the icons or buttons
- Even buttons on all tiles (Start, Pause, Reset, Take now, Open list) – their size depends on the tile size
- Ready medication schedules come with sample medicines (e.g. 3× a day: Tablets 1 and Syrup 2) – just change the names and doses
- The medication tile uses space better: larger text and pills on large tiles, on a wide tile the clock on the left and medicines on the right
- macOS menu bar: when a timer has its own icon, the app icon hides; without a timer icon (or without a timer) the app icon is shown
- The floating mini window adjusts its height to the number of timers, and shrinks the main timer when the screen runs out of space
- Settings → General: app reset – timers go to the archive, settings return to defaults

## 0.2.8 – 2026-11-19

- New sidebar on the left: New timer, New list, Archive, Mini and Settings – with labels or icons only
- New timer in two steps: pick a type from the tiles (the name is optional), then the settings
- Ready suggestions for every type: wake-up, lunch, bedtime, timers from 5 s to 2 h, work 8–4 and 9–5, stretching every 45 min, upcoming holidays, seasons, shopping lists – settings and colours fill in by themselves
- Medication configurator: choose how many times a day – the times are suggested automatically; then the same set of medicines at every time or a separate one for each

## 0.2.7 – 2026-11-19

- New floating mini window layout: one large main timer (name, until when, countdown and start / pause / reset buttons) with the other timers below as small tiles with a short time, 3 per row
- Clicking a tile makes it the main timer; set the tile order in Settings → Mini window
- The main timer can have its own view, font and accent colour
- The ⇄ button in the mini window switches layouts: list, bar, floating

## 0.2.6 – 2026-11-19

- Medication timer: a schedule for each medicine (set times, every X h with a night break, with meals), days of the week / month, every N days, cycles such as 21/7, treatment from–to, ready templates
- Dose alarm with confirmation and history; a missing medicine can be added to the shopping list right away
- To-do and shopping lists (quantity, unit, group) with a reminder – type “2 kg potatoes” and the rest fills in by itself
- Archive of closed timers: restore and delete
- Work and week timers: separate skins for work and free time, default names “Work” / “Free time”

## 0.2.5 – 2026-11-18

- New name: TickDown (formerly Odliczacz) – settings and skins move over automatically
- Always-on-top mini window: a list in 1–3 columns or a bar in 1–3 rows, text scales with the window
- Menu bar icon menu: show window, mini window, timers with their display format, quick theme change
- Working hours: a separate timer name during and outside work
- Settings and the timer window split into categories, with Save / Cancel buttons
- Skin colour configurator, choice of Dock icon colours

## 0.2.4 – 2026-11-18

- English interface – the language follows the system settings
- Live Dock icon: a stopwatch with progress or the countdown digits of the nearest timer
- Countdown start time – progress is measured from the moment the timer was set

## 0.2.3 – 2026-11-17

- “Week / weekend” timer: until Friday 5 pm, then until Sunday midnight – notifications at each switch, automatic work / weekend skins
- Five app styles: Classic, Glass, Bento, Minimal, Soft (Settings → App appearance)
- Eight new colour themes: Midnight, Aurora, Snow, Mint, Lavender, Sorbet, Coffee, Modern graphite
- 15 new clock fonts, 12 of them built into the app (OFL licence)
- 14 new skins (including LCD, Terminal, Nixie, Cyber, Bauhaus) and 77 icons in themed groups

## 0.2.2 – 2026-11-17

- Countdown to holidays: Poland (10), Europe, the UK, the USA and China (5 each) plus your own occasions (one-off or yearly)
- Countdown to the next (or a chosen) season – the astronomical start, accurate to the minute
- 17 holiday skins picked automatically for the holiday / season
- Six card sizes: small square, square, small tall and wide, large tall and wide; views scale to the card
- For countdowns longer than a day all views show the number of days; “1 week” and “1 day” reminders before a holiday

## 0.2.1 – 2026-11-16

- Dock icon badge: the number of active timers and the time to the nearest end (e.g. `3 · 12:34`)
