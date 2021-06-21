// pages/index/components/photos/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photoList:[
     [
        '../../../../icons/22.png',
        '../../../../icons/22.png',
        '../../../../icons/22.png',
        '../../../../icons/22.png',
        '../../../../icons/22.png',
        '../../../../icons/22.png',
     ],
     [
      '../../../../icons/22.png',
      '../../../../icons/22.png',
      '../../../../icons/22.png',
      '../../../../icons/22.png',
      '../../../../icons/22.png',
      '../../../../icons/22.png',
   ],
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handlePreview(e){
    const  src = e.currentTarget.dataset.src
    const {photoList} = this.data
    let urls = []
    photoList.map(item=>{
      urls=[...urls,...item]
    })
    // console.log([...photoList],urls)
    wx.previewImage({
      urls: urls,
      current:src
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