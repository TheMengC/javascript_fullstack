cookie在浏览器和服务器间来回传递，cookie数据不能超过4k。
sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存，存储大小达到5M或更大。


## localStrorage
始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据

## sectionStrorage
仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持

## cookie
domain: cookie 生成的域
.baidu.com:   pan.baidu.com   zhidao.baidu.com
map.baidu.com

path: 路径
/
/mobile

domain + path : 构成 cookie 生小范围

expires/Max-Age: 生效的时间

httpOnly: 
cookie 来源：1.服务端  2. js
httpOnly如果为true， cookie 不可以被 js 操作的
