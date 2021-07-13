// pages/my/abroad/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       headContent:{
         tip1:'上传留学相关材料',
         tip2:"我们会帮助您完成留学申请",
         tip3:["入学申请表","护照","有条件offer","雅思/内部语言测试成绩单","学费/押金银行缴纳回执","指定机构肺结核检测证明"]
       },
       process:[
         {type:'STEP1',content:'入学申请表',file:'Excel文件',isUpload:false,fileName:'',url:''},
         {type:'STEP2',content:'护照（正反面）',file:'图片*2',isUpload:false,fileName:'',url:''},
         {type:'STEP3',content:'有条件offer',file:'pdf',isUpload:false,fileName:'',url:''},
         {type:'STEP4',content:'雅思/内部语言测试成绩单',file:'图片',isUpload:false,fileName:'',url:''},
         {type:'STEP5',content:'学费/押金银行缴纳回执',file:'图片',isUpload:false,fileName:'',url:''},
         {type:'STEP6',content:'指定机构肺结核检测证明',file:'图片',isUpload:false,fileName:'',url:''},
       ],
      
  },

  upload(e){
   console.log(e)
   const that = this;
   const{process}=this.data;
   const imagesType=['STEP2',"STEP4","STEP5","STEP6"]
   const {item,index} = e.currentTarget.dataset;
   if(imagesType.includes(item.type)){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFileName = res.tempFilePaths[0]
        process[index].fileName=tempFileName.name;
        process[index].isUpload=true;
        process[index].url=tempFileName;
        that.setData({process})
        console.log(tempFileName)
      }
    })
   }else {
     const type = item.type==="STEP1"?'excel':'pdf';
    wx.chooseMessageFile({
      count: 1,
      type: type,
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFileName = res.tempFiles[0];
        process[index].fileName=tempFileName.name;
        process[index].isUpload=true;
        process[index].url=tempFileName.path;
        that.setData({process})
        console.log(tempFileName)
      }
    })
   }
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})