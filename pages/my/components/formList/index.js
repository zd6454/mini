// pages/my/components/formList/index.js
 let url;
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
  }
})
