// pages/index/components/swiper/index.js
const app = getApp();
const domainName = app.globalData.domainName;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bannerDetail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      this.getBanner(options.id);
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

  getBanner(id){
    const that = this
    wx.request({
      url: domainName+'/banner/getBanner',
      method: 'GET',
      header: {},
      data:{
        bannerId:id
      },
      credentials: 'omit',
      success(res) {
        console.log(res.data)
        that.setData({bannerDetail:res.data})
      }
    })
  }
})