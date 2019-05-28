import wepy from 'wepy'
import { handleActions } from 'redux-actions'
import { ASYNC_INCREMENT } from '../types/counter'

const Api = require('../../wxApi/api')

const defaultState = {
  userinfo:'',
  orderIndex: 3,
  imgUrl: 'http://192.168.0.109:8083/bag/static/modular/images',
  editor:''
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
}, defaultState)