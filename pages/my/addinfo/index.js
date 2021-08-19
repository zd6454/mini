// pages/my/addinfo/index.js
const app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
var util=require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
       info:{
        username:'',
         phone:'',
         school:'',
         institute:'',
         clazz:'',
       },
      infoName:[
       { name:"姓名:",type:"username"},
       {name:'电话:',type:"phone"},
       {name:"大学:",type:"school"},
       {name:"学院:",type:"institute"},
       {name:"班级:",type:"clazz"},
      ],
      title:"同学您好，为了给您提供方便，请完善您的个人信息",
      userInfo:{},
  },
  
  getUser(){
    const that=this;
   wx.request({
     url: domainName+'/user/getUser',
     method:"GET",
     data:{userId:openid?openid:wx.getStorageSync('openid')},
     success(res){
      that.setData({userInfo:res.data})
     }
   })
  },

  formSubmit(e){
   const {value}=e.detail;
   const that = this;
   console.log(value,'vare')
   const{userInfo}=this.data;
   userInfo.username=value.username?value.username:userInfo.username;
   userInfo.phone=value.phone?value.phone:userInfo.phone;
   userInfo.school=value.school?value.school:userInfo.school;
   userInfo.institute=value.institute?value.institute:userInfo.institute;
   userInfo.clazz=value.clazz?value.clazz:userInfo.clazz;
   wx.request({
     url: domainName+'/user/updateUser',
     method:'POST',
      data:userInfo,
      success(res){
        if(res.data==""){
          wx.showModal({
         title:"完善成功",
         icon:"success",
         success (res) {
          if (res.confirm) {
            that.omitto();
          } else if (res.cancel) {
            console.log('用户点击取消')
            that.omitto();
          }
        }
       })
        }else{
         wx.showModal({
           title: '网络错误',
         })
        }
      },
   })

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
   this.getUser();
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