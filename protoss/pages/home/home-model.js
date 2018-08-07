import {Base} from '../../utils/base.js';

class Home extends Base{
  constructor(){
    super();
  }
  getBannerData(id,callBack){
    var params = {
        url: 'banner/'+id,
        sCallback:function(res){
          callBack&&callBack(res);
        }
    }
    this.request(params);
  };

  getThemeData(callback){
    var param = {
      url: 'theme?ids=1,2,3',
      sCallback: function(data){
        callback&&callback(data);
      }
    }
    this.request(param);
  };
  
}

export {Home};