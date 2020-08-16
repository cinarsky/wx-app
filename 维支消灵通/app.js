//app.js

App({
  onLaunch: function () {
    
    wx.cloud.init({
      env:'cinarsky-h2jk2'
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    }),
    
    wx.cloud.callFunction({
      name: "getopenid",
      complete:(res)=> {
        console.log(res);
        this.globalData.openid = res.result.openid
      }
    })
  },
  globalData: {
    userInfo: null,
    code:null,
    appid:'wxd16cea445e2ea967',
    serId:'6e7c991cfbb54d0e93700544caa1df00',
  }
})