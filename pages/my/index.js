// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {name:'留学流程',icon:'../../icons/public.png',url:'./abroadFlow/index'},
      {name:'我的留学',icon:'../../icons/abroad.png',url:''},
      {name:'论坛发布',icon:'../../icons/list.png',url:'./publishforum/index'},
      {name:'系统消息',icon:'../../icons/message.png',url:'./forum/index'},
    ],
     setting:[
       {name:'个人信息',url:'./info/index'},
       {name:'论坛消息',url:'./forum/index'},
       {name:'我的发布',url:''},
       {name:'论坛草稿',url:'./publishforum/index'},
       {name:'联系我们',url:''}
     ],
     login:false,
     userInfo:{}
  },

  todetail(e){
  console.log(e)
  const {url} = e.currentTarget.dataset.set;
  wx.navigateTo({
    url: url,
  })
  },
  switchto(e){
   const{url}=e.currentTarget.dataset.item;
   wx.navigateTo({
     url: url,
   })
  },
  getuser(e){
    const that =this;
    wx.getUserProfile({
      desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          login:true
        })
      }
    })
  },

  loginout(){
   this.setData({
     login:false
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