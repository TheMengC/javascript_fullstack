// pages/movieDetails/movieDetails.js
const movie= require('../../data/movieList.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    love:true,
    show: true,
    movieDetails: {}
  },
  textOpen: function() {
    this.setData({
      show: false
    })
  },
  textClose: function() {
    this.setData({
      show: true
    })
  },
  wantWatch () {
    console.log('ok')
    this.setData({
      love : false
    })
  },
  neverWatch: function() {
    this.setData({
      love : true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = Number(options.id);
    this.setData({
      id
    })
    let movieDetails = movie.movieList.forEach((item) => {
      // console.log(item)
      if (item.id == id) {
        this.setData({
          movieDetails: item
        })
      }
    })
    console.log(movieDetails)
    // this.setData({
    //   movieDetails: movieDetails
    // })
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