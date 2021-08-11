// pages/exc/index.js
const app = getApp();
const domainName = app.globalData.domainName;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList:[],
    path: './first/index',
    detail: ""
  },

  todetail(e){
    const that = this;
    console.log(e)
    const id = e.currentTarget.dataset.set.forumId;
    const path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: path + "?forumId=" + id,
      fail(err){
         console.log(err)
      }
    })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getAllUserForums();
      this.getAllForums();
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

  },

  getAllUserForums(){
    const that = this
    wx.request({
      url: domainName+'/forum/getAllForums',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        that.setData({activityList:res.data})
      }
    })
  },

  getAllForums(){
    const that = this
    wx.request({
      url: domainName+'/forum/getAllForums',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        that.setData({detail:res.data})
      }
    })
  }
})