// pages/page/page.js
const app = getApp();
var loadingToast = function(){
  wx.showToast({
    title: '加载中',
    icon:'loading',
    duration:800
  })
};
var address = {};
var data = function(text){
    this.text = text;
    this.style = 'choose_no';
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
        head_letters:[
          { text:'A-G',style:'choose_yes'},
          { text:'H-K',style:'choose_no' },
          { text:'L-S',style:'choose_no' },
          { text:'T-Z',style:'choose_no'}
        ],
        provinces:[
          { text:"山东省",style:'choose_yes'},
          { text:"河南省",style:"choose_no"}
        ],
        citys:[
          { text:"枣庄市",style:'choose_yes'},
          { text:'烟台市',style:'choose_no'}
        ]
  },
  addStyle:function(datas){
    var result = [];
    for(var i=0,len=datas.length;i<len;i++){
      var one = new data(datas[i]);
      result.push(one);
    }
    result[0].style = "choose_yes";
    return result;
  },
  changeView:function(index,datas){
      for(var i=0,len=datas.length;i<len;i++){
        datas[i].style = 'choose_no';
      }
      datas[index].style = 'choose_yes';
      return datas;
  },
  chooseLetter:function(e){
      var index = e.currentTarget.id;
      this.chooseLetterRequest(index);
  },
  chooseLetterRequest:function(index){
    var that = this;
    var head_letters = this.data.head_letters;
    var text = "";
    head_letters = this.changeView(index, head_letters);
    text = head_letters[index].text;
    loadingToast();
    this.setData(
      {
        head_letters: head_letters
      }
    );
    wx.request({
      url: app.globalData.siteroot + '/city_json_test/js/getCity.php',
      data:{
        head_letter:text
      },
      success:function(res){
        if (typeof res.data !== 'object') return false;
        var datas = that.addStyle(res.data);
        that.setData(
          {
            provinces:datas
          }
        );
        that.chooseProvinceRequest(0);
      }
    })
    
   
    
    
  },
  chooseProvince:function(e){
    var index = e.currentTarget.id;
    this.chooseProvinceRequest(index);
  },
  chooseProvinceRequest:function(index){
    var that = this;
    var provinces = this.data.provinces;
    var text = "";
    provinces = this.changeView(index, provinces);
    text = provinces[index].text;
    loadingToast();
    this.setData(
      {
        provinces: provinces
      }
    );
    address['province'] = provinces[index].text;
    wx.request({
      url: app.globalData.siteroot + '/city_json_test/js/chooseCity.php',
      data: {
        province: text
      },
      success: function (res) {
        if (typeof res.data !== 'object') return false;
        var datas = that.addStyle(res.data);
        that.setData(
          {
            citys: datas
          }
        );
        that.chooseCityRequest(0);
      }
    })
  },
  chooseCity:function(e){
    var index = e.currentTarget.id;
    this.chooseCityRequest(index,'active');
  }, 
  chooseCityRequest:function(index,behavior){
    var citys = this.data.citys;
    citys = this.changeView(index, citys);
    this.setData(
      {
        citys: citys
      }
    );
    address['city'] = citys[index].text;
    if (behavior){              //主动选择  和  默认加载 行为不同
      getApp().globalData['address'] = address;
      
      wx.navigateBack({
        
      })
    };
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.chooseLetterRequest(0);
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