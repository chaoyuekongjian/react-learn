// import { createStore } from '../redux'
import { DECREASE, INCREASE } from './action/action-type'
import { getAddUserAction, getDeleteUserAction } from './action/user-action'
import reducer from './reducer'
import { applyMiddleware, createStore } from '../redux'

const logger1 = store => next => action => {
  console.log('旧数据', store.getState())
  next(action)
  console.log('新数据数据', store.getState())
}

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

const store = createStore(reducer, applyMiddleware(logger1))

const dispatch = store.dispatch
store.dispatch = function(action) {
  console.log('旧数据', store.getState())
  dispatch(action)
  console.log('新数据数据', store.getState())
}

console.log(store)
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(getAddUserAction({ id: 3, name: '用户2', age: 20 }))
store.dispatch(getAddUserAction({ id: 4, name: '用户2', age: 20 }))
store.dispatch(getDeleteUserAction(3))

export default store