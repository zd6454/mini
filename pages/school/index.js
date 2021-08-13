// pages/school/index.js
const app = getApp();
const domainName = app.globalData.domainName;
const img = app.globalData.imgDomain;
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolList:[
      {
        text:'教学实力',
        image:img+'/saveFiles/images/微信图片_20210512113244.png',
        path:'detail/index',
        id:"1"
      },
      {
        text:'学部简介',
        image:img+'/saveFiles/images/微信图片_20210512113554.jpg',
        path:'deprtments/index',
        id:"2"
      },
      {
        text:'学习体验',
        image:img+'/saveFiles/images/R6a4a35499754f599e5ab10fff057d020.jpg',
        path:'detail/index',
        id:"3"
      },
      {
        text:'课程介绍',
        image:img+'/saveFiles/images/微信图片_20210511163947.jpg',
        path:'detail/index',
        id:"4"
      }
    ],
    htmlData:"",
    videoSrc:""
  },

  todetail(e){
    console.log(e)
    var path = e.currentTarget.dataset.path;
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: path + "?id=" + id,
    })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getOverview();
      this.getSchoolVideo();
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
  getOverview(){
    const that = this
    wx.request({
      url: domainName+'/information/getInforContent/SchoolOverview',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        var temp = res.data;
        WxParse.wxParse('htmlData', 'html', temp, that);
      }
    })
  },
  getSchoolVideo(){
    const that = this
    wx.request({
      url: domainName+'/schoolVideo/getSchoolVideo',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        console.log(res.data);
        that.setData({videoSrc:res.data});
        //WxParse.wxParse('body', 'html', that.content, that, 0);
      }
    })
  }
})