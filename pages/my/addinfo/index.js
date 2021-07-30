// pages/my/addinfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       info:{
         name:'',
         phone:'',
         college:'',
         academy:'',
         class:'',
       },
      infoName:[
       { name:"姓名:",type:"name"},
       {name:'电话:',type:"phone"},
       {name:"大学:",type:"college"},
       {name:"学院:",type:"academy"},
       {name:"班级:",type:"class"},
      ],
      title:"同学您好，为了给您提供方便，请你完善您的个人信息"
  },
  formSubmit(value){
   console.log(value)
  },
  omitto(){
   wx.navigateBack({
    delta: 1
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