# Handsome Quest

Dan: when you add a comic there is several things you need to do (order doesn't matter as long as the firebase serve/deploy is last)

1. Add image to sequentially numbered 'res/img/#.gif'
1. Add caption to sequentially numbered 'res/txt/#.txt' (should be same # as previous).  Note: for newlines, instead of enter use <br>.
1. Add header (Advance => without the Advance =>) to comic.js imgHeaders (same format).
1. [Optional, but recommended] Increment index.html ln 50 and archive.html ln 48 '<script src="js/comic.js?v=0.0.#"></script>'.  # doesn't matter as long as it changes, for ease update it to same # as above.

To add a new story arc (for the archive pagination):

1. Add info to archive.js storyPanels (same format).
1. [Optional, but recommended] Increment archive.html ln 49 '<script src="js/archive.js?v=0.1.#"></script>'.  # doesn't matter as long as it changes.

After any change:

1. firebase serve --only hosting (to test locally, images may not load)
1. firebase deploy -m "INSERT_COMMIT_MESSAGE"
