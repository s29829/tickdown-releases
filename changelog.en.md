# TickDown – changelog

## 0.2.27 – 2026-11-27

- Calendar: a new "Calendar" button in the sidebar (below "Home", which now has a house icon) opens the calendar of all spaces full screen. Week view by default; there is a new year view – 12 months on one screen, days with events marked with a dot, click a day or a month to open it. Large calendar tiles (6×2 and bigger) get the year view too.
- Home now shows only spaces. Large tiles: numbers next to a smaller board preview; small tiles: the nearest end and list progress; list view: space statistics in one line.
- Home and the calendar get a statistics bar for all spaces at the bottom – just like on a board.
- Delete buttons look like the other buttons, without a bright red background.
- Sticky notes: a new sticky note is 1×1 by default and gets a colour different from the notes already on the board.
- "Copy as": a list item due on a date (without a time) shows the right day.

## 0.2.26 – 2026-11-27

- "Copy as" in the tile and space menu: Markdown or formatted text (pastes with formatting into text editors and email). Each kind copies in its own way: lists with checkboxes and due dates, tests and gaps with an answer key, flashcards and Gantt as a table, a calendar as a plan of the visible week or month. A calendar and an event can also be copied as iCalendar.
- Calendar: pasting content into another calendar adds the events instead of replacing the existing ones; "Event" tiles from the same space are copied too. You can paste iCalendar text into a calendar.
- Inspiration: every module and kind of space shows who suggested the idea and how the module changed (tile or space menu → "Inspiration…", the wizard, starter sets, Settings → General). When signed in, you can send the author a thank-you – they get an email.

## 0.2.25 – 2026-11-27

- Learning with AI: a new "Add AI learning" button under "Add new" in the sidebar opens the learning pack window with the AI prompt right away. When the server has no model keys yet, a "Coming soon" note replaces the model picker – you can still copy the prompt into any AI chat.
- Sticky notes: 6 colours in the bottom-left corner for a quick paper change, the title in the same font as other tiles, a shorter default name ("Sticky 1"). Drop a sticky note on another one to make a stack – browse it with ‹ › and use "Spread the stack" in the tile menu to lay it out again.
- 4×2 and 6×2 calendar in month view: the month on the left, the event list on the right; click a day to list events from that day.
- Due dates of to-do items show up on the board as "Deadline" tiles and in the calendar; a new "Dates" section in space settings.
- The week counter has a topic list "Weekdays" / "Weekend" with history and a report; work history gets "Today" and "Later" items.
- Deleted items go to the Trash (together with group contents) and can be restored from there. Account matters and the Trash live in a separate "Account settings" window.
- Menu bar: counter and space icons match the app – monochrome or colour.
- The web version starts faster – straight from the copy on the device, without waiting for the server.

## 0.2.24 – 2026-11-26

- Learning with AI (test phase): in the "Prompt for AI" window a signed-in account can pick a model – Claude or Gemini – and click "Generate". The learning pack is created on the TickDown server and loads by itself, with no copying of the prompt or pasting of the answer.
- Generation has daily limits. When a limit runs out, the app shows "No limits left for this period" with a countdown to the refresh; the model comes back on its own.
- Generation can run in the background – you can close the window and the finished pack lands in the packs window.

## 0.2.23 – 2026-11-26

- Sidebar: drag the divider to change its width (double-click restores the default); each space has a share icon – coloured when the space is shared; no item counts next to the names
- Share (formerly “Team”): a new icon and limit bars – shared spaces, people in a space, joined spaces
- The app version is shown under the app name in the sidebar (“beta · v…”)
- New accounts (beta): after confirming the address, a short form for the administrators; an account awaiting approval can ask for invitations
- Signing up with an invitation: the account becomes active when you click the link in the email – the person who invited you gets an activation message
- Invitations: copy the activation link or send it yourself (e.g. via a messenger), and the list shows whether the person has created an account and whether it is active yet

## 0.2.22 – 2026-11-26

- Account invitations: when the server cannot send the email, the app says so instead of “Sent” – the invitation stays valid
- The number of available invitations refreshes when you open Settings – new invitations granted by the administrator show up without signing in again

## 0.2.21 – 2026-11-25

- Team: invite people to a space as editors or viewers – everyone sees the same items and changes show up for others after a moment (space settings → Team)
- In a shared space lists merge item by item, everyone turns alarms on for themselves, and work history, learning scores and dose confirmations stay private
- Trash and history of a shared space: restore items deleted or overwritten by others in the last 30 days; medication is shared only after consent, copying out of the space is allowed by the owner
- View link: show a board or a group to someone without an account – read only and until the date you choose, with encrypted content; a list of links with open counts, extending and revoking (space settings → Links)
- The same content on the computer and in the browser: changes from both places merge by themselves, and when the same item was changed in two places, the “Changes to review” window shows the differences – keep one or both versions
- Signing in with local work: choose which spaces to merge with the account, on board thumbnails
- Account type and limits are shown in the status bar and in Settings → Account
- Reminders in one window: several pending things (lessons, doses, lists) instead of many pop-ups; the medication window also shows unconfirmed doses from the last day
- Learning modules: a course from a pack is a group with its own course – several modules on one board
- A space dragged onto another in the sidebar becomes a group in it
- Monochrome icons by default (colourful – Settings → Appearance), short sounds in flashcards and quizzes (can be turned off)
- You can also move the app window by the header of an open window and by the sidebar; double-click maximises it

## 0.2.20 – 2026-11-24

- Faster sign-in: signing in from a new device or network (e.g. your phone) no longer takes up to 15 seconds
- Web version: after you tap “Sign in” you immediately see that sign-in is in progress, then that your account data is loading; if the server doesn't respond, you get a message and “Try again”
- The web version starts faster, especially on mobile networks; on a phone the sign-in window has larger fields and buttons and doesn't move when the keyboard hides
- Sign-in window on the first launch of the desktop app: sign in or choose “Work locally”; 5 sign-in panel colors to choose from
- “Add account” button on the left, above the user name
- Working hours: the “Late”, “Overtime” and “Report” buttons are always at hand – at work, after work and on days off
- Working hours: a work list (to do and done) next to the clock on horizontal tiles; you can also show it as a separate tile
- Deadlines in to-do lists: a day and optionally a time, colored “overdue”, “today”, “tomorrow”
- Web version on a phone: a 3–4 column board and a menu at the bottom of the screen

## 0.2.19 – 2026-11-23

- TickDown account in the app: sign in with the same account as in the web version, and your boards, lists, notebooks and archive stay the same on the computer and in the browser
- On the first launch of the new version you choose: sign in, create an account, or use the app locally – you can add an account later
- Creating an account in the app and in the browser: after you confirm your email address, the account starts working once the administrator approves it; people with an invitation get their account right away
- Invitations: if you have a quota, you can invite friends from Settings → Account (the link is valid for 14 days)
- Several accounts on one device – the account panel on the left, above Settings: account list, switching, local work; each account has its own data
- When an account already has data, the first time you open it on a computer you choose: download from the account, upload the computer's data, or merge – your local work stays untouched
- Security: you're signed out after 14 days without use and asked for your password again every 90 days

## 0.2.18 – 2026-11-22

- The “Study” window is now split into sections: ★ Favourites (star on a pack tile), Recommended, Languages, Computing, Management
- New study packs: Linux commands, ML – decision trees, ML – linear regression, ML – classification, Projects – metrics and quality
- All study packs are bilingual (PL and EN) – flashcards, tests, cheat sheets, gap fills and pairs are created in the interface language; in the English courses the English version has explanations and definitions in English; your own packs can include English content too (`_en` fields)

## 0.2.17 – 2026-11-22

- New “Event” tile – meeting, call, deadline, birthday, party, trip, appointment, sport, exam – with a large illustration of its type, date, countdown and alarm
- A tile dropped on a calendar opens the event window with an alarm on the day it was dropped on (the calendar no longer moves aside while dragging); notes and lists can also remind you “in a moment”, without a calendar entry
- All-day events can remind you “on the day at 9:00” or the day before
- A calendar of all spaces on the home screen and a “Calendar” button in the sidebar
- Layers icon next to a calendar’s name: turn events, timers and lists on or off, and in a Gantt project also milestones, stages, starts, ends and task ranges
- One colour per item: the colour set on a tile or on the Gantt chart also shows on the chart bar and icon, in the calendar and in linked events
- New Material-style tile type icons throughout the app – colourful or simple (Settings → Appearance)
- Events saved to Google Calendar are regular events there, and TickDown remembers which space they belong to
- The mini window shows one space – a space switcher at the top in every layout; the icon after a space name opens its configurator: main module and visible thumbnails
- The mini window’s main module always shows something: the nearest countdown, or the clock when nothing is counting; up to 6 thumbnails below it, up to 9 in the list and strip
- Learning course in the mini window: path progress, current session, ▶ opens the lesson, ■ stops the course
- Gantt project in the mini window: time left until the project ends, elapsed time, current and next stage

## 0.2.16 – 2026-11-22

- Fixed loading of built-in learning packs and courses in the launcher (“Could not load the pack” message)

## 0.2.15 – 2026-11-22

- Space tabs above the board: several spaces open at once, switch with Cmd/Ctrl+1…9 and Ctrl+Tab, remembered after restart (option in Settings); the palette icon on a tab changes the space’s look
- Right-click space menu (sidebar, tab, home screen): open, rename in place, settings, paste box, duplicate, close tab, delete
- Duplicate a tile (a group – with all its content) or a whole space with its board layout
- Keyboard shortcuts on tiles: copy / paste box and content, duplicate, edit, rename (F2), delete; a click selects a tile, Enter edits it, Esc deselects; the shortcut list is in Settings → General
- Rename a card by double-clicking its name right on the tile; the icon at the end of the name opens the bubble with type, proportions, skin and colour
- To-do lists: edit items right on the tile, Enter adds the next one, Tab / Shift+Tab makes sub-items, the ⋮⋮ handle drags an item together with its sub-items
- Gantt: custom bar colour (click a bar or use the schedule window) and link colour; double-click a bar to open its schedule
- Home screen: choose tiles, small tiles or a list of spaces
- The About window and the website footer show the author and idea contributors

## 0.2.14 – 2026-11-22

- Learning: the “Course” tile plans study sessions (a path topic by topic, reviews), reminds you when it’s lesson time and shows progress; a lesson opens in its own window with the materials
- Learning: new practice notebooks – multiple-choice quizzes with explanations, gap-fill sentences and matching pairs; your last and best score are kept
- Learning: 13 ready courses (English B1 and B2, Python, SQL, Git, Scrum, PRINCE2, UML, statistics…), your own packs from a JSON / ZIP file or a web address, and an AI prompt that prepares a course on any topic
- Tiles: rest the pointer on a card’s name (on touch – tap it) to change its type (clock view, note or list kind), proportions, skin and dominant colour
- Tiles: every kind has its own allowed proportions and default size (e.g. round clock – square, digital – wide rectangle, calendar also 6×2); Settings → Tiles lets you narrow them and change the default
- Right-click menu on a card: copy and paste box, copy and paste content (including text from other apps into notes and lists), edit, delete and move to another space or group

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
