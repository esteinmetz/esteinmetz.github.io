# Handsome Quest

Dan: when you add a comic there is 5 things you need to do (order doesn't matter)
1. Add image to sequentially numbered 'res/img/#.gif'
1. Add caption to sequentially numbered 'res/txt/#.txt' (should be same # as previous).  Note: for newlines, instead of enter use <br>.
1. Add header (Advance => without the Advance =>) to comic.js imgHeaders (same format).
1. Make comic.js line 10 read "return #;" where # is the max number of gif/txt above.
1. [Optional, but recommended] Increment index.html ln 50 and archive.html ln 37 '<script src="js/comic.js?v=0.0.#"></script>'.  # doesn't matter as long as it changes, for ease update it to same # as above.
1. firebase deploy -m "INSERT_COMMIT_MESSAGE"