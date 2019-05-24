const api = require('./main')

module.exports = {
  request: api.request,
  imgUrl: api.API_BASE_URL,
  userinfo: (data) => { // 登录
    return api.request('/bag/wechat/login/userinfo', 'post', data)
  },

  
}