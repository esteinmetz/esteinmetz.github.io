# Handsome Quest

Dan: when you add a comic there is several things you need to do (order doesn't matter as long as the firebase serve/deploy is last)

1. Add image to sequentially numbered 'res/img/STORY_PAGE/#.gif'
1. Add caption to sequentially numbered 'res/txt/STORY_PAGE/#.txt' (should be same # as previous).  Note: for newlines, instead of enter use `<br>`.
1. Add header (Advance => without the Advance =>) to setupSTORY_PAGE.js imgHeaders (same format, last line).
1. [Optional, but recommended] Increment STORY_PAGE.html ln 50 and archive/STORY_PAGE.html ln 52 `<script src="js/setupSTORY_PAGE.js?v=0.0.#"></script>`.  # doesn't matter as long as it changes, for ease update it to same # as above.

To add a new story arc (for the archive pagination):

1. Add info to setupSTORY_PAGE.js storyPanels (same format).
1. [Optional, but recommended] Increment archive/STORY_PAGE.html ln 50 `<script src="js/setupSTORY_PAGE.js?v=0.1.#"></script>`.  # doesn't matter as long as it changes.

To add a new line highlight

1. Add new row to setupSTORY_PAGE.js in format `'Name to Search For': 'color',`  Color should use any css color code (tested with words like 'red' and hexcodes like '#34eb46').

To change the thumbnail of a story on the main page.

1. Add the new image to the base image directory for the story (res/img/HandsomeQuest for the first story).
1. Goto index.html, and change the appropriate `<img>` tag's file to the new one's name.

After any change:

1. `firebase serve --only hosting` (to test locally, images may not load)
1. `firebase deploy -m "INSERT_USEFUL_COMMIT_MESSAGE"`

Tips for work:

1. VSCode I highly recommend the "Live Server" extension.  You can test changes live and locally directly from VSCode instead of needing the `firebase serve --only hosting`

To Fix:
- [x] navbar needs a preceding '/'
- [x] archive links need the '/' too (next/first/last/etc)
- [x] update news to https://bsky.app/profile/dannybones.bsky.social
- [x] Make "About" page under construction.
- [ ] make sure undefined works too
- [ ] Archive page
- [ ] Separate archives: navbar link or selection page.  My choice.  Maybe a selection page and a dropdown link?
- [ ] Load thumbnails.
- [ ] add scaling to archives (different by comic)
- [x] add scaling to main page images (different by comic)
