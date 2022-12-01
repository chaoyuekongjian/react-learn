import ActionTypes from "./utils/action-types";
import { isPlainObject } from "./utils/is-plain-object"


/**
 * 
 * @param {*} reducer reducer
 * @param {*} defaultState 默认状态值
 */
export default function createStore(reducer, defaultState) {

  const curReducer = reducer
  const curState = defaultState
  const listeners = [] // 记录所有的监听器

  function dispatch(action) {
    // 验证action
    if (!isPlainObject(action)) {
      throw new TypeError('action must be a plain object')
    }
    // 验证type属性是否存在
    if (action.type === undefined) {
      throw new TypeError('action must has a property of type')
    }
    curState = curReducer(curState, action)
    // 运行所有的监听器
    for(const listener of listeners) {
      listener()
    }
  }
  
  function getState() {
    return curState
  }
  
  // 添加一个订阅器
  function subscribe(listener) {
    listeners.push(listener)
    let isRemove = false
    return () => {
      if (isRemove) return // 已经移除一次之后就不用再移除了
      isRemove = true
      // 将添加的listener从数组中移除
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  // 创建仓库时需要分发一次初始的action  完成初始化
  dispatch({
    type: ActionTypes.INIT()
  })


  return {
    dispatch,
    getState,
    subscribe
  }
}