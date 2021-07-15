// pages/school/index.js
const app = getApp();
const domainName = app.globalData.domainName;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolList:[
      {
        text:'教学实力',
        image:'../../icons/first1.png',
        path:'./components/notice/index'
      },
      {
        text:'学部简介',
        image:'../../icons/first1.png',
        path:'./components/banner/index'
      },
      {
        text:'学习体验',
        image:'../../icons/first1.png',
        path:'./components/office/index'
      },
      {
        text:'课程介绍',
        image:'../../icons/first1.png',
        path:'./components/photos/index'
      }
    ],
    htmlData:"",
    videoSrc:""
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
        console.log(res.data);
        that.setData({htmlData:res.data});
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