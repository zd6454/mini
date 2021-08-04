// pages/my/info/index.js
const app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
var util=require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     items:[
       {myinfo:'头像',content:'',type:"imgUrl"},
       {myinfo:'昵称',content:'',type:"username"},
       {myinfo:'性别',content:'',type:"gender"},
       {myinfo:'学校',content:'',type:"school"},
       {myinfo:'学院',content:'',type:"institute"},
       {myinfo:'班级',content:'',type:"clazz"},
       {myinfo:'姓名',content:'',type:"username"},
       {myinfo:'手机号',content:'',type:"phone"},
       {myinfo:'地址',content:'',type:"address"},
     ]
  },

  fixone(e){
    const{items}=this.data;
    const that=this;
    const {index}=e.currentTarget.dataset;
     if(index===0||index===2){
       if(index===0){
         return;
       }else{
        wx.showActionSheet({
          itemList: ['女','男'],
          success (res) {
           console.log(res)
           that.updateInfo(res.tapIndex);
          },
          fail (res) {
            console.log(res.errMsg)
          }
        })
       }
       
     }else{
       wx.navigateTo({
         url: `../edit/index?name=${items[index].type}&content=${items[index].content}&title=${items[index].myinfo}`,
       })
     }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getUser();
  },
  getUser(){
    const that=this;
    wx.request({
      url: domainName+'/user/getUser',
      method:"GET",
      data:{userId:openid},
      success(res){
      const userInfo=res.data;
      userInfo.gender=res.data.gender==1?'男':'女';
      that.setData({userInfo})
      that.setInfo(userInfo);
      }
    })
   },

   setInfo(userInfo){
    const {items}=this.data;
    items.map((item)=>{
      item.content=userInfo[item.type];
    })
    this.setData({items});
   },
  


  updateInfo(gender){
    const that=this;
    const{userInfo,items}=this.data;
    userInfo.gender=gender;
    items[2].content=gender===1?'男':'女';
    wx.request({
     url: domainName+'/user/updateUser',
     method:"POST",
     data:userInfo,
     success(res){
       that.setData({items})
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