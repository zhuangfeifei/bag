import wepy from 'wepy'
import { handleActions } from 'redux-actions'
import { ASYNC_INCREMENT } from '../types/counter'

const Api = require('../../wxApi/api')

const defaultState = {
  userinfo:'',
  orderIndex: 3,
  imgUrl: 'http://192.168.0.109:8083/bag/static/modular/images',
  editor:'',
  shop_detail:'',//首页跳转详情参数
  shareit: Api.imgUrl+'/bag/static/modular/images',//分享卡片图
  imgurl:Api.imgUrl+'/bag/kaptcha/file/gallery/' ,//首页图片地址
  pric:Api.imgUrl+"/bag/kaptcha/",//评论图片地址
  shareited:1,
  usercode:200
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
  usercodes(state, action){
    return { ...state,usercode:action.payload}
  }
}, defaultState)