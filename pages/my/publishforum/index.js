// pages/my/publishforum/index.js
const app = getApp();
const domainName = app.globalData.domainName;
const openid = wx.getStorageSync('openid');
var util=require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     inti:{},
     files: [],
     title:"",
     content:"",
     forumId:0,
  },
  gettitle(e){
   const{value}=e.detail;
   this.setData({title:value});
  },

  getContent(e){
  const{value}=e.detail;
  this.setData({content:value})
  },

previewImage: function(e){
    wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.data.files // 需要预览的图片http链接列表
    })
},
selectFile(files) {
    console.log('files', files)
    // 返回false可以阻止某次文件上传
},
deleteImg(){
    this.setData({files:[]})
},
uplaodFile(files) {
    console.log('upload files', files)
    // this.setData({files:files,})
    // 文件上传的函数，返回一个promise
    const {tempFilePaths} = files
    return new Promise((resolve, reject) => {
        console.log(resolve);
        console.log(reject);
        let obj = {
          url: files.tempFilePaths[0]
        }
        this.setData({
          files: this.data.files.concat(obj),
        });
    })
},

uploadError(e) {
    console.log('upload error', e.detail)
},
uploadSuccess(e) {
    console.log('upload success', e.detail)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
  })
  },

  uploadImg(forumId){
      const{files}=this.data;
      wx.uploadFile({
        filePath: files[0].url,
        name: 'uploadfile',
        formData:{forumId},
        url: domainName+'/forum/uploadFile',
        success(res){
        // console.log(res,'uplaod');
        },
        fail(err){
          //  console.log(err)
        },
        complete(res){
          // console.log(23,'res')
        }
      })
  },
  //保存
  comfirm(){
      const that = this;
   const{title,content,files}=this.data;
   const date=util.formatTime(new Date());
   if(title==""){
       wx.showModal({
         title: '请填写标题',
       })
       return;
   }
   wx.request({
     url: domainName+'/forum/addForum',
     method:"POST",
     data:{
        userId:openid,
        forumId:0,
        sort:0,
        isUse:0,
        imgUrl:"",
        time:date,
        title,
        content,
     },
     success(res){
        console.log(res);
    try {
        that.setData({forumId:res.data.forumId})
        that.uploadImg(res.data.forumId);
        wx.showModal({
          title: '保存成功',
          success(res){
            if (res.confirm) {
                that.omitto();
              } else if (res.cancel) {
                console.log('用户点击取消')
                that.omitto();
              }
          }
        })
    } catch (error) {
        console.log('something error')
    }
        
     },
   })
  },
  omitto(){
   wx.navigateBack({
       delta:1,
   })
  },
  //发布
  publish(){
      const that=this;
   const{title,content,files}=this.data;
   const date=util.formatTime(new Date());
   if(title==""){
    wx.showModal({
      title: '请填写标题',
    })
    return;
}
   wx.request({
     url: domainName+'/forum/addForum',
     method:"POST",
     data:{
        userId:openid,
        forumId:0,
        sort:0,
        isUse:1,
        date,
        imgUrl:"",
        title,
        content,
     },
     success(res){
     console.log(res);
     that.setData({forumId:res.data.forumId})
     that.uploadImg(res.data.forumId);
     wx.showModal({
      title: '发布成功',
      success(res){
        if (res.confirm) {
            that.omitto();
          } else if (res.cancel) {
            console.log('用户点击取消')
            that.omitto();
          }
      }
    })
     },
   })
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