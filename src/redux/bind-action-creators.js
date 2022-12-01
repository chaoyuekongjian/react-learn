
// 得到一个自动分发的action创建函数
function getAutoDispatch(actionCreator, dispatch) {
  return function(...args) {
    const action = actionCreator(...args)
    dispatch(action)
  }
}

export default function(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return getAutoDispatch(actionCreators, dispatch)
  }
  if (typeof actionCreators === 'object') {
    const result = {}
    for (const key in actionCreators) {
      if (Object.hasOwnProperty.call(actionCreators, key)) {
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function')  {
          result[key] = getAutoDispatch(actionCreator, dispatch)
        }
      }
    }
    return result
  }
  throw new TypeError('actionCreators must be an object or function')
}