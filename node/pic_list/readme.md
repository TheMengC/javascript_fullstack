- restful web
  一切皆资源
  DOM + CSS + JS
  URL Universal Resource Location 统一资源定位符
  http://www.baidu.com/shop/1/good/2
  明确的表达  它的资源是什么意思？


  {
    cnpm init -y
    cnpm install json-server
    cnpm run dev
  }
- npm init -y 从前端， 加入后端
  script 执行一些命令
  json-server npm 包
  url 上将我们的json文件向外暴露
  json 资源  restful(语义化的api)
- 语义化的url
  http://localhost:1314/post    GET请求    文章列表  
  http://localhost:1314/:id       详情
  GET  url  明文访问  (请求页面)
  POST  新增数据      (一般用于填写表单)
  PUT   修改数据
  PATCH  修改数据
  DELETE  删除数据

  url + 谓语动词
  PUT     覆盖
  CATCH   部分修改

- :8080  live-server   web 页面
  :1314  启动了后端API
  不同的端口代表不同的服务
  前后端 全栈型的项目