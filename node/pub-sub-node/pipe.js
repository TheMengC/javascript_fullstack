const fs = require('fs')
// stream
fs.createReadStream('./music.js')
.pipe(
  fs.WriteStream('./music-copy.js')
)