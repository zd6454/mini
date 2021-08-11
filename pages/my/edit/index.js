// pages/my/edit/index.js
const app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
var util=require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     name:'',
     content:'',
     userInfo:{},
     title:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUser();
  this.setData({
    name:options.name,
    content:options.content,
    title:options.title,
  })
  },
  getValue(e){
   const{value}=e.detail;
   this.setData({content:value})
  },



  comfirm(){
    const {userInfo,name,content}=this.data;
    const that=this;
    userInfo[name]=content;
    wx.request({
      url: domainName+'/user/updateUser',
      method:"POST",
      data:userInfo,
      success(res){
      wx.showModal({
        title: '修改成功',
        icon:"success",
        success(res){
          if (res.confirm) {
            that.omitto();
          } else if (res.cancel) {
            console.log('用户点击取消')
            that.omitto();
          }
        }
      })
      }
    })
  },
  omitto(){
   wx.navigateBack({
     delta:1,
   })
  },
  //获取用户信息
  getUser(){
    const that = this;
    wx.request({
      url: domainName+'/user/getUser',
      method:"GET",
      data:{userId:openid?openid:wx.getStorageSync('openid')},
      success(res){
      console.log(res.data)
      that.setData({userInfo:res.data});
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
    this.getUser();
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