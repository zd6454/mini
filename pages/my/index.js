// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {name:'发布论坛',icon:'../../icons/public.png',url:''},
      {name:'我的留学',icon:'../../icons/abroad.png',url:''},
      {name:'我的发布',icon:'../../icons/list.png',url:''},
      {name:'系统消息',icon:'../../icons/message.png',url:''},
    ],
     setting:[
       {name:'个人信息',url:'./info/index'},
       {name:'论坛消息',url:''},
       {name:'论坛草稿',url:''},
       {name:'常见问题',url:''},
       {name:'联系我们',url:''}
     ]
  },

  todetail(e){
  console.log(e)
  const {url} = e.currentTarget.dataset.set;
  wx.navigateTo({
    url: url,
  })

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