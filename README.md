# 微信小程序选择省市插件
## 使用说明
#### 该插件为一个小程序的页面，在该页面可选择省和地级市，并将该该选择添加到全局变量 *getApp().globalData.address* 中，如果有变量冲突请修改 _pages/chooseCity/chooseCity.js_ 第137行 *getApp().globalData* 属性的添加。另外该插件需要后台请求，下面将详细说明。
## 目录结构

-入口文件  
&nbsp;&nbsp;&nbsp;&nbsp; -demo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  _演示demo_  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -pages  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-chooseCity &nbsp;&nbsp;&nbsp;&nbsp;_选择城市页_  
&nbsp;&nbsp;&nbsp;&nbsp; -city_json_test &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _前台依赖的后台文件_  

## 安装
#### clone资源后，打开微信开发工具，新建一个 _demo_ ，所选文件为名为 _demo_ 的文件夹。将名为 _city_json_test_ 的文件上传到服务器根目录，之后修改小程序的全局变量所在文件 _app.js_ 中的 _globalData_ 属性下 _siteroot_ 属性，修改为你刚刚上传到服务器的根目录，看下面代码。
    globalData: {
     userInfo: null,
     address: "",
     siteroot: '您的服务器根目录'
    }
## 后记
#### 如果把数据直接放在前端的话，一是会导致小程序文件庞大，二是前端在保存较为大的数据时会导致页面卡顿。在使用的时候将 _chooseCity_ 页面分离出来即可。
    






