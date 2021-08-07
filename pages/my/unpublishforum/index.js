// pages/my/unpublishforum/index.js
const app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     data:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getForum();
  },
  getForum(){
    const that=this;
    wx.request({
      url: domainName+'/forumDemo/getUserForums',
      method:"GET",
      data:{userId:openid?openid:wx.getStorageSync('openid')},
      success(res){
      console.log(res)
       that.setData({data:res.data})
      },
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
    this.getForum();
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