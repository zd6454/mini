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
        icon:'../../icons/first1.png',
        path:'./components/notice/index'
      },
      {
        text:'关于UWTSD',
        icon:'../../icons/first1.png',
        path:'./components/banner/index'
      },
      {
        text:'东亚办公室',
        icon:'../../icons/first1.png',
        path:'./components/office/index'
      },
      {
        text:'校园相册',
        icon:'../../icons/first1.png',
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
    corporationList:[
      {
        title:'武汉理工大学合作政策',
        time:'2020-3-5',
        image:''
      }
    ]
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
    this.getSwiper()
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
    const  src = e.currentTarget.dataset.src
    let urls = []
    this.data.swiperList.map(item=>{
      urls=[...urls,item.imgUrl]
    })
    wx.previewImage({
      urls,
      current:src
    })
  },
  handleSchool(e){
    const  path = e.currentTarget.dataset.path
    if(path){
      wx.navigateTo({
        url: path,
      })
    }
  }
})
