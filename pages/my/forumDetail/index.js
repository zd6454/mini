// pages/my/forumDetail/index.js
const app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
var util=require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"系统消息",
    time:"2021-12-1",
    content:"123"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const{messageId}=options;
   this.setData({ messageId});
   this.getMessage();
  },
  getMessage(){
    const{messageId}=this.data;
  wx.request({
    url: domainName+'/message/getMessage',
    method:"GET",
    data:{messageId},
    success(res){
     console.log(res.data)
    }
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