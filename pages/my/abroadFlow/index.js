// pages/my/abroadFlow/index.js
const app = getApp();
const domainName = app.globalData.domainName;
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      htmlData:'',
      content:{
        title1:'威尔士三一圣大卫大学',
        title2:"留学申请时间规划（秋季入学）",
        flow:[
          {
            time:'9-10月',
            "相关流程":"了解威尔士三-圣大卫大学录取政策:\n英文官网: WWW.UWTsd.ac.K\n中文官网: WWW.UWTsd.COM",
            "准备事项":"办理护照",
          },
          {
            time:'11-12月',
            "相关流程":"准备申请资料，申请文书，向东亚办公室申请考试中心递交申请材料: sue.su@uwtsd.com",
            "准备事项":"参加英国大学内侧培训/雅思培训，提升语言能力",
          },
          {
            time:'次年1-3月',
            "相关流程":"获得英国大学录取有条件offer(博士申请人需参加大学面试)",
            "准备事项":"1.提供雅思/英国大学内测成绩合格证明;\n2.根据语言情况申请英国大学语言程。",
          },
          {
            time:'次年4-5月',
            "相关流程":"1.准备签证担保金\n2.根据offer要求缴纳学费押金/学费",
            "准备事项":"1.准备有条件offer.上需提供的其他材料 ",
          },
          {
            time:'次年6月',
            "相关流程":"1.获得无条件offer\n2.指定机构肺结核体验证明",
            "准备事项":"1.获得CAS，准备递签的相关资料\n2.申请英国大学宿舍",
          },
          {
            time:'次年7-8月',
            "相关流程":"递交英国学生签证申请，获得签证;",
            "准备事项":"1.机票预订，接机预订;\n2.准备前行所需的文件、物品等; ",
          },
          {
            time:'次年9月',
            "相关流程":"出国",
            "准备事项":"出国 (如在疫情期间， 学生出国还需参加额外的核酸检测) ",
          },
        ],
        mark:"1.如学生涉及需要增加英国大学语言课程，则签证和出国时间相应会提前，具体根据学生语言课程开课时间来规划;\n2.如学生申请春季入学，则相应流程的时间需要提前，具体可咨询: 027-59627668;"
      }
  },
 
  comfirm(){
   wx.navigateTo({
     url: '../abroad/index',
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      this.getFlow();
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

  } ,
  getFlow(){
    const that = this
    wx.request({
      url: domainName+'/information/getInforContent/OverseaStudy',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        console.log(res.data);
        var temp = res.data;
        WxParse.wxParse('htmlData', 'html', temp, that);
      }
    })
  },
})