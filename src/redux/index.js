import { createStore } from 'redux'
import { DECREASE, INCREASE } from './action/action-type'
import { getIncreaseAction } from './action/number-action'

/**
 * 
 * @param {*} state 之前仓库中的状态(数据)
 * @param {*} action 描述要做事情的对象 约定action的格式{type: '操作类型', payload: '附加数据'}
 * @returns
 */
function reducer(state, action) {
  // 返回一个新的状态
  if (action.type === INCREASE) return state + 1
  if (action.type === DECREASE) return state - 1
  return state // 如果是一个无效的操作类型，则返回原数据
}


const store = createStore(reducer, 10)
store.dispatch(getIncreaseAction())