import wepy from 'wepy'
import { handleActions } from 'redux-actions'
import { ASYNC_INCREMENT } from '../types/counter'

const Api = require('../../wxApi/api')

const defaultState = {
  userinfo:'',
  orderIndex: 0,
  imgUrl: 'http://192.168.0.109:8083/bag/static/modular/images',
  editor:'',
  category:'', // 收藏夹
  favoritesList:'', // 收藏夹
  categoryId: {// 收藏夹ids
      categoryId: '', smallCategoryId: ''
  }, 
  stateId:'',
  shop_detail:'',//首页跳转详情参数
  shareit: Api.imgUrl+'/bag/static/modular/images',//分享卡片图
  imgurl:Api.imgUrl+'/bag/kaptcha/file/gallery/' ,//首页图片地址
  pric:Api.imgUrl+"/bag/kaptcha/",//评论图片地址
  shareited:1,
  addresCode:1,
  goodsDetail:'',  // 商品详情
  specifications:'',  // 商品规格
  order:'',  // 订单信息
  addressId:'',  // 下订单的收货地址
  isChangeAddress:'',  // 是否是下订单的收货地址

  orderListItem:'',  // 订单详情
  kdDetail:'',  // 物流信息
  mrgkm:1,//签到
  orDeteil:''
}

export default handleActions({
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      orderIndex: action.payload
    }
  },
  userinfos(state, action){
    return { ...state, userinfo: action.payload }
  },
  editorMethod(state, action){
    return { ...state, editor: action.payload }
  },
  categoryMethod(state, action){
    return { ...state, category: action.payload }
  },
  favoritesMethod(state, action){
    return { ...state, favoritesList: action.payload }
  },
  categoryIdMethod(state, action){
    return { ...state, categoryId: action.payload }
  },
  stateIdMethod(state, action){
    return { ...state, stateId: action.payload }
  },

  imgurls(state, action){
    return { ...state,imgurl:action.payload}
  },
  shop_detailsMethods(state, action){
    return { ...state,shop_detail:action.payload}
  },
  shop_detaiMethods(state, action){
    return { ...state,shareited:action.payload}
  },
  shareitMethods(state, action){
    return { ...state,shareit:action.payload}
  },
  pricMethods(state, action){
    return { ...state,pric:action.payload}
  },
  useraddres(state, action){
    return { ...state,addresCode:action.payload}
  },
  mrgkmMethods(state, action){
    return { ...state,mrgkm:action.payload}
  },
  goodsDetailMethods(state, action){
    return { ...state, goodsDetail:action.payload}
  },
  specificationsMethods(state, action){
    return { ...state, specifications:action.payload}
  },
  orderMethods(state, action){
    return { ...state, order:action.payload}
  },
  addressIdMethods(state, action){
    return { ...state, addressId:action.payload}
  },
  isChangeAddressMethods(state, action){
    return { ...state, isChangeAddress:action.payload}
  },



  orderListItemMethod(state, action){
    return { ...state, orderListItem:action.payload}
  },
  kdDetailMethods(state, action){
    return { ...state, kdDetail:action.payload}
  },
  orderDeteil(state, action){
    return { ...state, orDeteil:action.payload}
  },
}, defaultState)