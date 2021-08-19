// pages/my/components/formList/index.js
 let url;
const app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       data:{
         type:Array,
         value:[],
         observer: function (newVal, oldVal) {
          // 属性值变化时执行 
          const data = newVal
          this.setData({
            activityList:data
          })
        }
       },
       type:{
         type:String,
         value:"",
         observer: function (newVal, oldVal) {
          // 属性值变化时执行 
          const data = newVal
          this.setData({
            type:data
          })
        }
       }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activityList:[],
    type:"",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    todetail(e){
      console.log(e)
      const{forumId} = e.currentTarget.dataset.item;
      const{type}=this.data;
      let url="";
      if(type==="done"){
        url=`/pages/exc/first/index?forumId=${forumId}`
      }else{
        url=`../publishforum/index?forumId=${forumId}&type=undone`
      }
      wx.navigateTo({
        url:url,
        success(res){
           console.log(res)
        },
        fail(err){
          console.log(err)
        }
      })
      },
      delete(e){
       const{forumId} = e.currentTarget.dataset.item;
      const{type}=this.data;
      const that=this;
      const forums=[forumId]
       let url='';
       if(type==="done"){
        url=`/forum/deleteForums`
      }else{
        url=`/forumDemo/deleteForums`
      }
       wx.request({
         url:domainName+url,
         method:"POST",
         data:{forums},
         success(res){
         if(!res.data){
           wx.showToast({
             title: '删除成功',
           })
           that.refresh()
         }else{
           wx.showModal({
             title: '删除失败',
             content:"请检查网络"
           })
         }
         }
       })
      },
      refresh(){
        const that=this;
        const{type}=this.data;
       let url='';
       if(type==="done"){
        url=`/forum/getUserForums`
      }else{
        url=`/forumDemo/getUserForums`
      }
      wx.request({
        url: domainName+url,
        method:"GET",
        data:{userId:openid?openid:wx.getStorageSync('openid')},
        success(res){
        console.log(res)
         that.setData({activityList:res.data})
        },
      })
      },
  }
})
