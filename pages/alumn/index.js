// pages/alumn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     mateList:[
       {img:'../../icons/abroad.png',name:'彼得多兰',info:'1234567685454545454545454545'},
       {img:'../../icons/abroad.png',name:'彼得多兰',info:'1234567685454545454545454545'},
     ]
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
  toEvents(){
   wx.navigateTo({
     url: './event/index',
   })
  },
  toStruct(){
    wx.navigateTo({
      url: './struct/index',
    })
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