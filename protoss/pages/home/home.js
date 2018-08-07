// pages/home/home.js
import {Home} from 'home-model.js';

var home = new Home;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  onLoad:function(){
      this._loadDate();
  },

  _loadDate:function(){
      var id = 1;
      home.getBannerData(id,(res)=>{
        // console.log(res);
        this.setData({
          'bannerArr': res
        });
      });

      home.getThemeData((res)=>{
        console.log(res);
        this.setData({
          'themeArr': res
        });
      });
  },
})