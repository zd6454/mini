// app.js
const domainName = "https://aitmaker.cn";
const imgDomain = "http://aitmaker.cn:9000";
const appid = "wx2bee8de96f3462d6";   //wx.getAccountInfoSync().miniProgram.appId;
const secret = "8967de4bc48b2e1631c4b6ad49ea3f53";
let openid;
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          //发起网络请求
          console.log(res.code)
          wx.request({
            url: domainName+'/user/getUserId',
            method:'POST',
            data: {
              "code": res.code,
              "appid":appid,
              "secret":secret,
            },
            success(res){
             openid=res.data.openid;
              wx.setStorageSync('openid', res.data.openid)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    domainName:domainName,       //后端接口域名地址
    imgDomain:imgDomain,
    openid,
  }
})
