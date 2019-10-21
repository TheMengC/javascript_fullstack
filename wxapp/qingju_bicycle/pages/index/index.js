Page({
  data: {
    markers: [],
    longitude: 115.823116,  //经度
    latitude: 28.734465,   //纬度
    scale: 18
  },
  onLoad () {
    // 微信赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中',
    });
    // 手机的GPS
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log(res)
        let {longitude, latitude} = res
        this.tocreateMaskers(longitude, latitude)
        this.setData({
          longitude,
          latitude
        }, () => {
          wx.hideLoading();
            
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
      
  },
  onReady() {
    // 地图上下文环境
    this.mapCtx =  wx.createMapContext('myMap');
  },
  toVisit (e) {
    console.log(e)
  },
  toScan() {
    return wx.scanCode({
      success: (res) => {
        // console.log(res);
        // 调试方法
        wx.wx.showModal({
          title: 'scan',
          content: 'JSON.stringify(res)'
        })  
      }
    })
  },
  toMsg() {},
  toUser() {},
  toReset() {
    // 当你使用地图来来去去的时候， 再回到当初的起点
    this.mapCtx.moveToLocation();
    this.setData({
      scale:18
    })
  },
  tocreateMaskers(longitude, latitude) {
    let markers = [
      {
        "id": 1,
        "iconPath": "/images/map-bicycle.png",
        "latitude": latitude,
        "longitude": longitude,
        "width": 52.5,
        "height": 30,
        "callout": {}
      }
    ]
    this.setData({
      markers
    });
  }
})