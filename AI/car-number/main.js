var AipOcrClient = require('baidu-aip-sdk').ocr  //图片识别？从图片之中提取文字
var fs = require('fs')
var image = fs.readFileSync('./car2.jpg').toString('base64') //文件本身就是二进制文本

var APP_ID = "17799065"
var API_KEY = "ueu7Pf7BeDFXoTBHK3pfnOWK"
var SECRET_KEY = "Nqn3ukG7Nz7Nm0yq81poocOM4yvBP0OG"

var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)

var options = {}
client.licensePlate(image, options)
  .then(function (result) {
    console.log(result)
  })
  .catch(function(err) {
    console.log(err)
  })