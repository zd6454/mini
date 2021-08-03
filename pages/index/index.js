// index.js
// 获取应用实例
const app = getApp();
const domainName = app.globalData.domainName;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    swiperList:[],
    schoolList:[
      {
        text:'置顶通知',
        icon:domainName+'/saveFiles/images/通知公告.png',
        path:'./components/notice/index'
      },
      {
        text:'关于UWTSD',
        icon:domainName+'/saveFiles/images/博士帽.png',
        path:'./components/banner/index'
      },
      {
        text:'东亚办公室',
        icon:domainName+'/saveFiles/images/打印机,纸,办公室,打印,文档,线性,扁平,填充,单色,简约,圆润.png',
        path:'./components/office/index'
      },
      {
        text:'校园相册',
        icon:domainName+'/saveFiles/images/相册.png',
        path:'./components/photos/index'
      }
    ],
    activityList:[
      {
        image:'',
        title:'伯明翰',
        time:'2020-3-10'
      },
      {
        image:'',
        title:'伯明翰',
        time:'2020-3-10'
      },
      {
        image:'',
        title:'伯明翰',
        time:'2020-3-10'
      },
    ],
    friendList:[
      {
        image:'',
        name:'fdsffv',
      },
      {
        image:'',
        name:'fdsffv',
      },
      {
        image:'',
        name:'fdsffv',
      },
      {
        image:'',
        name:'fdsffv',
      },
    ],
    corporationList:[]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getSwiper();
    this.getFriend();
    this.getcooperation()
  },
  getSwiper(){
    const that = this
    wx.request({
      url: domainName+'/banner/getAllUseBanners',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        console.log(res.data)
        that.setData({swiperList:res.data})
      }
    })
  },
  getNotice(){
    const that = this
    wx.request({
      url: domainName+'notice/overheadNotice',
      method: 'GET',
      header: {},
      data:{
        noticeId:12
      },
      credentials: 'omit',
      success(res) {
        console.log(res.data)
        // that.setData({swiperList:res.data})
      }
    })
  },

  getFriend(){
    const that = this
    wx.request({
      url: domainName+'/schoolmate/getAllUseSchoolmates',
      method: 'GET',
      header: {},
      data:{
        noticeId:12
      },
      credentials: 'omit',
      success(res) {
        console.log(res.data)
        that.setData({friendList:res.data})
      }
    })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handlePreview(e){
    console.log(e.currentTarget.dataset.src)
    var path = './components/banner/index';
    var id = e.currentTarget.dataset.src.bannerId;
    wx.navigateTo({
      url: path + "?id=" + id,
    })
    /*const  src = e.currentTarget.dataset.src
    let urls = []
    this.data.swiperList.map(item=>{
      urls=[...urls,item.imgUrl]
    })
    wx.previewImage({
      urls,
      current:src
    })*/
  },

  handleSchool(e){
    const  path = e.currentTarget.dataset.path
    if(path){
      wx.navigateTo({
        url: path,
      })
    }
  },
  //获取国际合作信息
  getcooperation(){
    const that = this;
    wx.request({
      url: domainName+'/interCooperation/getAllUseInterCoopers',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        console.log(res.data)
        that.setData({corporationList:res.data.slice(0,2)})
      }
    })
  },
  //国际合作跳转
  todetail(e){
    console.log(e)
    const {interCooperId} = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `./detailExpress/index?id=${interCooperId}&key=${"interCooperId"}`,
    })
   },

   handleFriend(e){
    console.log(e)
    const {schoolmateId} = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `./detailExpress/index?id=${schoolmateId}&key=${"schoolmateId"}`,
    })
   }
})


