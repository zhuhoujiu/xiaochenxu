import {Config} from '../utils/config.js';

class Base{
  constructor(){
    this.baseRequestUrl = 'http://z.cn/api/v1/'

  }
  request(params){
    var url = this.baseRequestUrl + params.url;
    if (!params.method){
      params.type = 'GET';
    }

    wx.request({
      url: url,
      data: params.data,
      header: {
        'content-type':'application/json',
        'token':wx.getStorageSync('token')
      },
      method: params.type,
      //dataType: 'json',
      //responseType: 'object',
      success: function(res) {
        params.sCallback && params.sCallback(res.data);
      },
      fail: function(res) {
        console.log(res);
      },
        
    })
  }
}
export {Base};