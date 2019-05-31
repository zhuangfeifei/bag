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
  collotionCategory: (data) => { // 获取所有的服装分类及各分类收藏数量
    return api.request('/bag/api/boutique/collotionCategory', 'post', data)
  },
  collotionStatus: (data) => { // 收藏全部状态及数量
    return api.request('/bag/api/boutique/collotionStatus', 'post', data)
  },
  collotionCloth: (data) => { // 根据大类，小类，全部分类获取收藏服装数据
    return api.request('/bag/api/boutique/collotionCloth', 'post', data)
  },
  collotionStatusCloth: (data) => { // 获取各状态下收藏服装列表
    return api.request('/bag/api/boutique/collotionStatusCloth', 'post', data)
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
  uncollection:(data)=>{//取消商品收藏 删除收藏
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
  deteleList:(data)=>{//购物车商品删除
    return api.request('/bag/api/shoppingCart/delShoppingCart', 'post', data)
  },
  cartMove:(data)=>{//购物车商品移入收藏夹
    return api.request('/bag/api/shoppingCart/moveCollotion', 'post', data)
  },
  userlike:(data)=>{//猜你喜欢
    return api.request('/bag/api/similarLike/likeList', 'post', data)
  },
  addcoupon:(data)=>{//领取优惠券(待领取)
    return api.request('/bag/api/coupon/getCouponList', 'post', data)
  },
  toBeused:(data)=>{//领取优惠券(待使用  已使用)
    return api.request('/bag/api/coupon/getCouponListByUseState', 'post', data)
  },
  toBeusedto:(data)=>{//领取优惠券(已过期)
    return api.request('/bag/api/coupon/getCouponListByState', 'post', data)
  },
  getCoupon:(data)=>{//领取优惠券(领取)
    return api.request('/bag/api/coupon/getCoupon', 'post', data)
  },
  ecxtUsername:(data)=>{//修改会员昵称
    return api.request('/bag/api/basic/setMemberName', 'post', data)
  },
  payPassworld:(data)=>{//设置支付密码
    return api.request('/bag/api/setPaypwd', 'post', data)
  },
  addphoneNum:(data)=>{//	根据手机号获取验证码
    return api.request('/bag/api/customer/code', 'post', data)
  },
  phoneNews:(data)=>{//	绑定手机号
    return api.request('/bag/api/bind/phoneNew', 'post', data)
  },
  setForget:(data)=>{//	忘记密码
    return api.request('/bag/api/setForgetPwd', 'post', data)
  },
  ecxtForgeta:(data)=>{//	修改密码
    return api.request('/bag/api/setUpdatePwd', 'post', data)
  },
}