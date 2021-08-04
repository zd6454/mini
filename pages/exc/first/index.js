var app = getApp();
var cdata;
var ldata;
const domainName = app.globalData.domainName;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList:[{
      title:'秋日伯明翰，一起走在森林与城市之间',
      author:'三一圣大卫',
      imgUrl:'http://1.116.77.118:2333/saveFiles/images/秋天落叶.png',
      content:'秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间秋日伯明翰，一起走在森林与城市之间'
    }],
    replyList:[
      {
        imgUrl:'',
      title:'天气很好',
      content:'你好',
      time:"2021-08-23"
    },
    {
      imgUrl:'',
    title:'天气很好',
    content:'你好',
    time:"2021-08-23"
  },
  ],
    reply_time: '1',
    test:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.forumId);
    // this.getForum(options.forumId);
    this.setData({forumId:options.forumId})
    this.intital();
  },
  intital:function(){
    this.setData({
      cdata:0,
      ldata:0
    })
  },

  formSubmit: function (e) {
    var that = this;
    const {forumId}=this.data;
    var liuyantext = e.detail.value.liuyantext; //获取表单所有name=liuyantext的值 
    var nickName = e.detail.value.nickname; //获取表单所有name=nickName的值 
    var headimg = e.detail.value.headimg; //获取表单所有name=headimg的值 
     const data={
      commentId:0,
      isUse:0,
      forumId,
      replyId:"",
      content:"",
      time:new Date(),
     }
    wx.request({
      url: domainName+'/comment/addComment',
      data,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '留言成功',
          icon: 'success'
        })
        that.setData({
          re: res.data,
        })
        wx.hideToast();
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

  getForum(Id){
    const that = this
    wx.request({
      url: domainName+'/comment/getForumComments',
      method: 'GET',
      header: {},
      data:{forumId: Id},
      credentials: 'omit',
      success(res) {
        console.log(res.data)
        that.setData({replyList:res.data})
      }
    })
  }
})