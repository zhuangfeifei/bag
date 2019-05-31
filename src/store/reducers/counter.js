import wepy from 'wepy'
import { handleActions } from 'redux-actions'
import { ASYNC_INCREMENT } from '../types/counter'

const Api = require('../../wxApi/api')

const defaultState = {
  userinfo:'',
  orderIndex: 3,
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
  addresCode:1
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
}, defaultState)