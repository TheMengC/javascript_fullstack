const fs = require('fs')
fs.readFile('./index.html', (err, data) => {
  //data 内存
  fs.writeFile('./index-copy.html', data, (err, res) => {
    if(!err) {
      console.log('writed!!!')
    }
  })
})
// stream
fs.createReadStream('./music.js')
.pipe(
  fs.WriteStream('./music-copy.js')
)