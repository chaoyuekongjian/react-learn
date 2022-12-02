import compose from "./compose"

// 注册中间件
export default function(...middlewares) {
  return function(createStore) { // 给我创建仓库的函数
    return function(reducer, defaultState) { // 用于创建仓库
      const store = createStore(reducer, defaultState) // 创建仓库
      let dispatch = () => { throw new Error("Not implemented")}
      const simpeStore = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args)
      }
      // 给dispatch赋值
      const dispatchProducers = middlewares.map(middleware => middleware(simpeStore))
      dispatch = compose(...dispatchProducers)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}