const https = require('https');
const http = require('http');
const cheerio = require('cheerio');

// doubanSpider('https://movie.douban.com/top250?start=0&filter=', (data)=> {
//   //得到结果
//   console.log(data);
// })

function doubanSpider(url, cb) {
  https.get(url, (res) => {
  let html = '';
  //流的形式
  res.on('data', (chunk) => {
    html += chunk;
  })
  res.on('end', () => {
    console.log(html);
    //jquery
    const $ = cheerio.load(html);
    let movies = [];
    $('li .item').each(function() {
      //拿到每一个电影
      const picUrl = $('.pic img', this).attr('src');
      const title = $('.info .title', this).text();
      const star = $('.star .rating_num', this).text();
      const inq = $('.inq', this).text();
      // console.log({
      //   picUrl,
      //   title,
      //   star,
      //   inq
      // })

      // cb({
      //   picUrl,
      //   title,
      //   star,
      //   inq
      // })

      movies.push({
        picUrl,
        title,
        star,
        inq
      })
    })
    cb(movies);
  })
});
}

http.createServer((req, res) => {
  doubanSpider('https://h5.m.taopiaopiao.com/app/moviemain/pages/index/index.html?from=outer', (data) => {
    // text/pain 纯文本
    // text/html html
    // mine  类型
    console.log('data', data);
    res.writeHead(200, {
      'Content-type':'application/json',
      'Access-Control-Allow-origin': '*'
    })
    res.end(JSON.stringify(data))  //把一个对象变成字符串    end要求必须是字符串
  })
}).listen(3000, () => {
  console.log('server is running 3000');
})