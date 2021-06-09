// pages/my/question/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {title:'一、如何发布作品',content:'233',isopen:false,},
      {title:'二、作品草稿在哪找',content:'213',isopen:false,},
      {title:'三、如何代理',content:'123',isopen:false,},
      {title:'四、处罚措施',content:'123',isopen:false,},
      {title:'五、免责申明',content:'123',isopen:false,},
    ],
    nopen:'../../../icons/nopen.png',
    open:'../../../icons/open.png',
  }, 

  opendetail(e){
    const{list}=this.data;
    const{index}=e.currentTarget.dataset;
    list[index].isopen=!list[index].isopen;
    this.setData({list})
  
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