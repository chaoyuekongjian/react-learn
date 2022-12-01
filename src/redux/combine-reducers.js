import validateReducers from './utils/validate-reducer'

export default function(reducers) {
  validateReducers(reducers)
  /**
   * 返回的是一个reducer函数
   */
  return function(state = {}, action) {
    const newState = {}
    for (const key in reducers) {
      if (Object.hasOwnProperty.call(reducers, key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action)
      }
    }
    return newState
  }
}