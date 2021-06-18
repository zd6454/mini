// pages/my/info/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     items:[
       {myinfo:'头像',content:'123'},
       {myinfo:'昵称',content:'123'},
       {myinfo:'性别',content:'男'},
       {myinfo:'学院',content:'计算机学院'},
       {myinfo:'班级',content:'软件1805班'},
       {myinfo:'姓名',content:'zd'},
       {myinfo:'手机号',content:'123456789'},
       {myinfo:'地址',content:'武汉理工大学'},
     ]
  },

  fixone(e){
    const{items}=this.data;
    const {index}=e.currentTarget.dataset;
     if(index===0||index===2){

     }else{
       wx.navigateTo({
         url: `../edit/index?name=${items[index].myinfo}&content=${items[index].content}`,
       })
     }
    console.log(e)
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