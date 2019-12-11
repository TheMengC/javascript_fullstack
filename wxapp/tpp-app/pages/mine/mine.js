var app = getApp
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    //用户个人信息
    userInfo:{
      avatarUrl:"../../images/login.png",//用户头像
      nickName:"立即登录",//用户昵称
    }
  },
  /**
   *点击添加地址事件
   */
  add_address_fun:function(){
    wx.navigateTo({
      url: 'add_address/add_address',
    })
  },
  login () {
    var that=this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success:function(res){
        // console.log(res);
        wx.showToast({
          title: '登录中',
          icon: 'loading',
          duration: 1000,
          success:function () {
            setTimeout(() => {
              var avatarUrl = 'userInfo.avatarUrl';
              var nickName = 'userInfo.nickName';
              that.setData({
                [avatarUrl]: res.userInfo.avatarUrl,
                [nickName]:res.userInfo.nickName,
              })
            }, 1000)

          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})