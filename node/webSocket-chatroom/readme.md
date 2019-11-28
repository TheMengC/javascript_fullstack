## 应用层
http webSocket  都处于应用层

http1.1: client ->>>> server
http2.0: 支持 server-push (服务端推送)

webSocket: client ->>>> server     server ->>>> client   
全双工双向通信

## 连接
1. 发送一个 http 请求
   后端 101 Switching Protocols
   Connection；Upgrade
之后 由 http 协议 升级为 webSocket 后续的发送 接受信息都会走 这个 全双工双向通道