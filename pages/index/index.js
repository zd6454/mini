// index.js
// 获取应用实例
const app = getApp();
const domainName = app.globalData.domainName;
const img = app.globalData.imgDomain;
const pageNum = 4;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    swiperList:[],
    friendPage:1,
    friendTotalPage:1,
    schoolList:[
      {
        text:'置顶通知',
        icon:img+'/saveFiles/images/通知公告.png',
        path:'./components/notice/index'
      },
      {
        text:'关于UWTSD',
        icon:img+'/saveFiles/images/博士帽.png',
        path:'../school/index'
      },
      {
        text:'东亚办公室',
        icon:img+'/saveFiles/images/打印机,纸,办公室,打印,文档,线性,扁平,填充,单色,简约,圆润.png',
        path:'./components/office/index'
      },
      {
        text:'校园相册',
        icon:img+'/saveFiles/images/相册.png',
        path:'./components/photos/index'
      }
    ],
    activityList:[
      
    ],
    friendList:[
     
    ],
    corporationList:[],
    undergraduateImg:img+'/saveFiles/images/博士帽.png',
    graduateImg:img+'/saveFiles/images/字典管理.png',
    doctorImg:img+'/saveFiles/images/书.png'
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
    this.getAllFriend();
    this.getSwiper();
    this.getFriend();
    this.getcooperation();
    this.getActivity();
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
        that.setData({swiperList:res.data.slice(0,3)})
      }
    })
  },
  getNotice(){
    const that = this
    wx.request({
      url: domainName+'notice/overheadNotice',
      method: 'GET',
      header: {},
      // data:{
      //   noticeId:11
      // },
      credentials: 'omit',
      success(res) {
        console.log(res.data)
        // that.setData({swiperList:res.data})
      }
    })
  },

  getActivity(){
    const that = this
    wx.request({
      url: domainName+'/activity/getAllActivitys',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        that.setData({activityList:res.data.slice(0,3)})
      }
    })
  },

  getAllFriend(){
    const that = this
    const {friendPage} = that.data;
    wx.request({
      url: domainName+'/schoolmate/getAllSchoolmates',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        that.setData({friendTotalPage:Math.ceil(res.data.length/pageNum)})
      }
    })
  },

  getFriend(){
    const that = this
    const {friendPage,friendList} = that.data;
      wx.request({
        url: domainName+'/schoolmate/getPageSchoolmates',
        method: 'GET',
        header: {},
        data:{
          page:friendPage,
          num:pageNum,
        },
        credentials: 'omit',
        success(res) {
          console.log(res.data)
          that.setData({friendList:[...friendList,...res.data]})
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
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handlePreview(e){
    console.log(e.currentTarget.dataset.src)
    var path = './components/swiper/index';
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
    const path = e.currentTarget.dataset.path
    console.log(e)
    if(path){
      wx.navigateTo({
        url: path,
      }).catch((error) => {
        wx.switchTab({
          url: path,
        })
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
        that.setData({corporationList:res.data.slice(0,3)})
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

   toActivityDetail(e){
     console.log(e);
     wx.navigateTo({
       url: './activityDetail/index?id=' + e.currentTarget.dataset.item.activityId,
     })
   },

  handleFriend(e){
    console.log(e)
    const {schoolmateId} = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `../alumn/alumnDetail/index?id=${schoolmateId}&key=${"schoolmateId"}`,
    })
  },


 // 滚动条触底事件
  onReachBottom(){
    const that = this
    const {friendPage,friendTotalPage} = that.data;
    that.setData({friendPage:friendPage+1})
    if(friendPage<friendTotalPage){
      that.getFriend()
    }else{
      // 没有下一页数据
      wx.showToast({
        title: '没有下一页数据',
        icon:'none'
      })
    }
  },
})


