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


  goodsLis:(data)=>{//首页商品展示
    return api.request('/bag/api/boutique/goodsList', 'post', data)
  },
  shopDetail:(data)=>{//首页商品展示
    return api.request('/bag/api/boutique/goodsDetail', 'post', data)
  },
  collection:(data)=>{//商品收藏
    return api.request('/bag/api/boutique/clickColltion', 'post', data)
  },
  uncollection:(data)=>{//取消商品收藏
    return api.request('/bag/api/boutique/deleteCollotion', 'post', data)
  },
  userlike:(data)=>{//商品喜欢
    return api.request('/bag/api/boutique/clickLike', 'post', data)
  },
  usernolike:(data)=>{//取消喜欢
    return api.request('/bag/api/boutique/delLike', 'post', data)
  },
  recommendation:(data)=>{//商品详情相似推荐
    return api.request('/bag/api/similarLike/similarList', 'post', data)
  },
  addshoplist:(data)=>{//商品详情加入购物车
    return api.request('/bag/api/shoppingCart/addShoppingCart', 'post', data)
  },
  commentsList:(data)=>{//商品评价
    return api.request('/bag/api/comments/commentsList', 'post', data)
  },
  cartList:(data)=>{//获取购物车列表
    return api.request('/bag/api/shoppingCart/shoppingCartList', 'post', data)
  },
  userlike:(data)=>{//猜你喜欢
    return api.request('/bag/api/similarLike/likeList', 'post', data)
  }
}