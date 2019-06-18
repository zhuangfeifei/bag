import wepy from 'wepy'
const API_BASE_URL = true?'http://192.168.0.112:8080':'https://www.zjwl.shop'
const request = (url, method, data, headers = 'application/x-www-form-urlencoded') => {
  let _url = API_BASE_URL + url
  return new Promise((resolve, reject) => {
    wepy.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': headers
      },
      success(request) {
        wepy.hideLoading()
        if(request.data.code == 200){
          resolve(request)
        }else{
          wepy.showModal({
            title: '温馨提示',
            content: request.data.message,
            success(res) {
              if (res.confirm) {
                // console.log('用户点击确定')
                if(request.data.code == 413){
                  wepy.navigateTo({
                    url: '/pages/my/setting/setting'
                  })
                }
              } else if (res.cancel) {
                // console.log('用户点击取消')
                if(request.data.code == 413){
                  wx.switchTab({
                    url: '/pages/index/index'
                  });
                }
              }
            }
          })
        }
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展了下
 */
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  request, API_BASE_URL
}