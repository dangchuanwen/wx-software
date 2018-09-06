//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  
  chooseCity: function(){
    wx.navigateTo({
      url: '../chooseCity/chooseCity',
    })
  },
  onLoad: function () {
    
    
  },
  onShow: function(){
    console.log(app.globalData.address)
  },
  getUserInfo: function(e) {
    
  }
})
