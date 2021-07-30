// pages/exc/index.js
const app = getApp();
const domainName = app.globalData.domainName;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList:[
      {
        image:'./images/秋天落叶.png',
        title:'秋日伯明翰，一起走在森林与城市之间',
        time:'2020-10-23',
        url:'./first/index'
      },
      {
        image:'./images/英国伯明翰.jpeg',
        title:'英国伯明翰珠宝学院中英文介绍',
        time:'2020-10-23',
        url:'./first/index'
      },
      {
        image:'./images/英式学习.jpeg',
        title:'BCU艺术、设计与媒体学部最热门的5大专业，快戳开看！',
        time:'2020-10-23',
        url:'./first/index'
      },
      {
        image:'./images/艺术.jpeg',
        title:'CLASSROOM|预计开学一个月，英式艺术课堂初体验',
        time:'2020-10-23',
        url:'./first/index'
      },
      {
        image:'./images/英国伯明翰.jpeg',
        title:'英国伯明翰珠宝学院中英文介绍',
        time:'2020-10-23',
        url:'./first/index'
      },
      {
        image:'./images/英式学习.jpeg',
        title:'BCU艺术、设计与媒体学部最热门的5大专业，快戳开看！',
        time:'2020-10-23',
        url:'./first/index'
      },
      {
        image:'./images/艺术.jpeg',
        title:'CLASSROOM|预计开学一个月，英式艺术课堂初体验',
        time:'2020-10-23',
        url:'./first/index'
      },
    ],
    test: [],
    detail: ""
  },

  todetail(e){
    console.log(e)
    const path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: path,
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
        console.log(res.data)
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
        console.log(res.data)
        that.setData({detail:res.data})
      }
    })
  }
})