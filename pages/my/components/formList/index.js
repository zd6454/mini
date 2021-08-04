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
       }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activityList:[
      {
        image:'./images/秋天落叶.png',
        title:'秋日伯明翰，一起走在森林与城市之间',
        time:'2020-10-23',
        url:'url'
      },
      {
        image:'./images/英国伯明翰.jpeg',
        title:'英国伯明翰珠宝学院中英文介绍',
        time:'2020-10-23',
        url:'url'
      },
      {
        image:'./images/英式学习.jpeg',
        title:'BCU艺术、设计与媒体学部最热门的5大专业，快戳开看！',
        time:'2020-10-23',
        url:'url'
      },
      {
        image:'./images/艺术.jpeg',
        title:'CLASSROOM|预计开学一个月，英式艺术课堂初体验',
        time:'2020-10-23',
        url:'url'
      },
      {
        image:'./images/英国伯明翰.jpeg',
        title:'英国伯明翰珠宝学院中英文介绍',
        time:'2020-10-23',
        url:'url'
      },
      {
        image:'./images/英式学习.jpeg',
        title:'BCU艺术、设计与媒体学部最热门的5大专业，快戳开看！',
        time:'2020-10-23',
        url:'url'
      },
      {
        image:'./images/艺术.jpeg',
        title:'CLASSROOM|预计开学一个月，英式艺术课堂初体验',
        time:'2020-10-23',
        url:'url'
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    todetail(e){
      console.log(e)
      const{forumId} = e.currentTarget.dataset.item;
      wx.navigateTo({
        url: `../../../exc/first/index?forumId=${forumId}`,
      })
      },
  }
})
