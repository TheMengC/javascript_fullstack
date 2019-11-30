Page({
  data: {
    // 写死？
    // easy-mock?
    // json server
    navData: [],
    currentTab: 0,
    navScrollLeft: 300
  },
  onLoad() {
    this.requestCart()
  },
  // 一个请求 一个函数
  requestCart() {
    wx.request({
      url: 'http://localhost:3000/indexPage',
      success: (res) => {
        // console.log(this)
        // console.log(res.data)
        // console.log(res);
        const navData = res.data.navData;
        const imgUrls = res.data.imgUrls;
        // const cost = res.data.data.cost
        // console.log(navData)
        this.setData({
          navData,
          imgUrls,
          // cost
        })
      }
    })
  },
  switchNav(event) {
    const cart = event.currentTarget.dataset.name;
    const cur = event.currentTarget.dataset.current;
    let text = this.data.navData;
    this.setData({
      cart,
      currentTab: cur
    })
  }
})