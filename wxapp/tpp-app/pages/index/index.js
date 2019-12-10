// pages/index/index.js
const movieList = require('../../data/movieList.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/zjz.jpg',
      '../../images/tqzz.jpg',
      '../../images/sndn.jpg',
      '../../images/syr.jpg'
    ],
    city: '南昌',
    now:true,
    interval: 3000,
    duration: 800,
    movieList: movieList.movieList
  },
  //接收city信息
  changeData(city) {
    this.setData({
        city: city
    })
 },
  IsHit: function() {
    this.setData({
      now:true
    })
  },
  upComing: function() {
    this.setData({
      now:false
    })
  },
  city: function() {
    wx.navigateTo({
      url: "/pages/city/city"
    })
  },
  movieDetail: function(event) {
    const id = event.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/movieDetails/movieDetails?id=' + id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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