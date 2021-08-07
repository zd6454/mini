// pages/my/components/messageList/index.js
const app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        list:{
          type:Array,
          value:[]
        }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    read(e){
    const that=this;
    const{messToUserId}=e.currentTarget.dataset.item;
     wx.request({
       url: domainName+'/message/readMessage',
       method:"GET",
       data:{messToUserId},
       success(res){
        console.log(res.data)
        that.getMessage();
        wx.showToast({
          title: '已读',
        })
       }
     })
   },
   getMessage(){
    const that=this;
    wx.request({
      url: domainName+'/message/getUserMessages',
      method:'GET',
      data:{userId:openid},
       success(res){
        console.log(res.data)
        that.setData({list:res.data})
       },
    })
  },
  }
})
