const api = require('./main')

module.exports = {
  request: api.request,
  imgUrl: api.API_BASE_URL,
  userinfo: (data) => { // 登录
    return api.request('/bag/wechat/login/userinfo', 'post', data)
  },
  listadress: (data) => { // 收货地址列表
    return api.request('/bag/api/address/listadress', 'post', data)
  },
  addadress: (data) => { // 添加收货地址
    return api.request('/bag/api/address/addadress', 'post', data)
  },
  defaultById: (data) => { // 设置默认
    return api.request('/bag/api/address/defaultById', 'post', data)
  },
  updateadress: (data) => { // 更新收货地址
    return api.request('/bag/api/address/updateadress', 'post', data)
  },
  deladress: (data) => { // 删除地址
    return api.request('/bag/api/address/deladress', 'post', data)
  },
}