// import { createStore } from '../redux'
import { DECREASE, INCREASE } from './action/action-type'
import { getAddUserAction, getDeleteUserAction } from './action/user-action'
import reducer from './reducer'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger' // logger中间件一般要放到最后一个
import thunk from 'redux-thunk'

// function logger1(store) {
//   return function(next) {
//     // 最终要应用的dispatch函数
//     return function(action) {
//       console.log('旧数据', store.getState())
//       next(action)
//       console.log('新数据数据', store.getState())
//     }
//   }
// }

const store = createStore(reducer, 
  applyMiddleware(
    thunk, 
    logger
  ))



export default store