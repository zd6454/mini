var app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
var util=require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    forum:{},
    replyList:[ ],
    content:"",
    height:0,
    replyId:0,
    replyWho:"评论",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getForum(options.forumId);
    this.setData({forumId:options.forumId})
    this.getDetail(options.forumId);
  },
  getDetail(forumId){
   const that=this;
    wx.request({
      url:domainName+'/forum/getForum' ,
      method:"GET",
      data:{forumId},
      success(res){
       if(res.data.title){
         that.setData({forum:res.data})
       }
      },
    })
  },
  getInput(e){
   const{value}=e.detail;
   this.setData({content:value})
  },
  heightChange(e){
    console.log(e,'w')
  this.setData({height:e.detail.height-20})
  },

  formSubmit: function (e) {
    if(!wx.getStorageSync('login')){
      wx.showModal({
        title: '请先登录',
      })
      return;
    }
    var that = this;
    const date=util.formatTime(new Date());
    const {forumId,content,replyId}=this.data;
     const data={
      commentId:0,
      isUse:0,
      userId:openid,
      forumId:Number(forumId),
      replyId:replyId,
      content,
      time:date,
     }
    wx.request({
      url: domainName+'/comment/addComment',
      method:"POST",
      data,
      success: function (res) {
        console.log(res.data)
        if(res.data.commentId){
           wx.showToast({
          title: '评论成功，审核通过后显示,',
          icon: 'success'
        })
        that.setData({replyId:0,content:"" })
         that.getForum(forumId);
        }    
      }
    })
  },
  reSet(){
  this.setData({replyId:0,replyWho:"评论"})
  },
  replyOne(e){
   console.log(e);
   const {commentId,username} = e.currentTarget.dataset.item;
   this.setData({replyId:commentId,replyWho:`回复${username}`,content:""});
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
    const that = this;
    
    wx.request({
      url: domainName+'/comment/getForumComments',
      method: 'GET',
      header: {},
      data:{forumId: Id},
      credentials: 'omit',
      success(res) {
        console.log(res.data)
        that.setData({replyList:res.data})
        wx.hideToast({})
      }
    })
  }
})