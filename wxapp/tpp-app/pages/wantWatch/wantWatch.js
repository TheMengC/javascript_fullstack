// pages/wantWatch/wantWatch.js
const movieList = require('../../data/movieList.js')
let app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: [],
    sum: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let mv = []
    app.globalData.movieList.map((item) => {
      movieList.movieList.map((index) => {
        if(item == index.id) {
          mv.push(index)
          this.setData({
            movie: mv
          })
          console.log(this.data.movie)
          this.setData({
            sum:app.globalData.movieList.length
          })
        }
      })
    })
  },
  movieDetail: function(event) {
    const id = event.currentTarget.dataset.id
    // console.log(id)
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    })
    wx.navigateTo({
      url: '/pages/movieDetails/movieDetails?id=' + id
    })
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