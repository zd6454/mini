// pages/my/index.js
const appid = "wx2bee8de96f3462d6";   //wx.getAccountInfoSync().miniProgram.appId;
const secret = "8967de4bc48b2e1631c4b6ad49ea3f53";
const app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
var util=require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {name:'留学流程',icon:'../../icons/public.png',url:'./abroadFlow/index'},
      {name:'我的留学',icon:'../../icons/abroad.png',url:'./abroad/index'},
      {name:'论坛发布',icon:'../../icons/list.png',url:'./publishforum/index'},
      {name:'系统消息',icon:'../../icons/message.png',url:'./forum/index'},
    ],
     setting:[
       {name:'个人信息',url:'./info/index'},
       {name:'论坛消息',url:'./forum/index'},
       {name:'我的发布',url:'./dopublishforum/index'},
       {name:'论坛草稿',url:'./unpublishforum/index'},
       {name:'联系我们',url:''}
     ],
     login:false,
     userInfo:{},
     openid:"",
     register:false,
     messageNum:0,
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
 
  login(){
    const that=this;
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code)
          wx.request({
            url: domainName+'/user/getUserId',
            method:'POST',
            data: {
              "code": res.code,
              "appid":appid,
              "secret":secret,
            },
            success(res){
              if(res.data.openid){
                that.setData({openid:res.data.openid})
                wx.setStorageSync('openid', res.data.openid)
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  
  loginInfo(userInfo){
    const that=this;
    const date=util.formatTime(new Date());
    const data={
      "userId":openid?openid:this.data.openid,
      "username":userInfo.nickName,
      "imgUrl":userInfo.avatarUrl,
      "gender":Number(userInfo.gender),
      "address":userInfo.province,
      "school":"",
      "institute":"",
      "clazz":"",
      "registerTime":date,
      "phone":"",
      "privilege":Number(0),
    };
   wx.request({
     url: domainName+'/user/login',
     method:'POST',
     data,
      success(res){
        console.log(res.data)
        if(res.data!=="登陆成功！"){
           wx.navigateTo({
          url: './addinfo/index',
        })
        }
      },
   })
  },

  getuser(e){
    const that =this;
    if(!that.data.register){
       wx.getUserProfile({
          desc: '用于完善用户资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            this.setData({
              userInfo: res.userInfo,
              login:true
            })
            that.loginInfo(res.userInfo);
          }
        })
    }else{
      this.setData({login:true})
    }
      wx.setStorageSync('login', true);
  },
 getafterUser (){
    const that=this;
    const{oepnid}=this.data;
    wx.request({
      url: domainName+'/user/getUser',
      method:"GET",
      data:{userId:openid?openid:wx.getStorageSync('openid')},
      success(res){
        if(res.data.userId){
          that.setData({userInfo:res.data,register:true,login:true})
          that.getMessageNum();
        }
      }
    })
  },
  loginout(){
   this.setData({
     login:false,
   })
   wx.setStorageSync('login', false);
  },

  getMessageNum(){
    const that=this;
    wx.request({
      url: domainName+'/message/getUserUnreadMessNum',
      method:"GET",
      data:{userId:openid?openid:wx.getStorageSync('openid')},
      success(res){
        console.log(res.data)
        that.setData({messageNum:res.data.num})
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.login();
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
      setTimeout(()=>{
        this.getafterUser();
      },1000)
       
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