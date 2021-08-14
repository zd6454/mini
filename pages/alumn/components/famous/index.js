// pages/alumn/components/famous/index.js
var WxParse = require('../../../../wxParse/wxParse');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
         list:{
           type:Array,
           value:[],
           observer: function (newVal, oldVal) {
            // 属性值变化时执行 
            const data = newVal;
            this.setData({
              list:data
            })
          }
         }
  },

  /**
   * 组件的初始数据
   */
  data: {
     list:[],
  },

  /**
   * 组件的方法列表
   */
  methods: {
  todetail(e){
    console.log(e)
    const {schoolmateId} = e.currentTarget.dataset.item;
   wx.navigateTo({
     url: `./alumnDetail/index?id=${schoolmateId}`,
   })
  }
  }
})
