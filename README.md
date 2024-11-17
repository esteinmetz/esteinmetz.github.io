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

Other notes:

1. TODO: for your about page, update as needed...don't add your email directly, add it encoded (instructions in about.js).
1. For Archive thumbnails, upload a 2nd img in the same location with '-thmb' added (ie page 1 has `1.gif` and `1-thmb.gif`).
1. For archive image size, open the setup for the story (ie `setupUndefined.js`) and update the first line with the pixel size (`var archiveImageSize = 100` means 100 pixels).
1. Add your contact info in the about page.  Note, do not directly add your email, instead encode it in about.js

After any change:

1. `firebase serve --only hosting` (to test locally, images may not load)
1. `firebase deploy -m "INSERT_USEFUL_COMMIT_MESSAGE"`

Tips for work:

1. VSCode I highly recommend the "Live Server" extension.  You can test changes live and locally directly from VSCode instead of needing the `firebase serve --only hosting`
