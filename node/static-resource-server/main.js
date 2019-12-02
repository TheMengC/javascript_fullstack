const fs = require('fs');
const http = require('http')
const path = require('path')

http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url)
  console.log(__dirname)
  // __dirname   代码运行的目录
  fs.stat(filePath, (err, stats) => {
    console.log(filePath)
    if(err) {
      res.statusCode = 404;
      res.end(`${filePath}: 404`)
      return
    }
    if(stats.isFile()) {
      res.statusCode = 200
      fs.createReadStream(filePath).pipe(res)
    } else if(stats.isDirectory()) {
      //readdir()   读取文件夹
      fs.readdir(filePath, (err, files) => {
        let filesLink = files.map(file => {
          return `<a href="${req.url === '/' ? '' : req.url + '/'}${file}">${file}</a><br/>`
        }).join('')
        res.end(filesLink)
      })
    }
  })
})
.listen(9999, () => {
  console.log('http://localhost:9999')
})