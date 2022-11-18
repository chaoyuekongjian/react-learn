import { useState } from 'react'

/**
 * 通用reducer函数
 * @param {function} reducer reducer函数，标准格式
 * @param {any} initState 
 * @param {function} initFunc 用于计算初始值的函数
 * @returns 
 */
export default function useReducer(reducer, initState, initFunc) {
  const [state, setState] = useState(initFunc ? initFunc(initState) : initState)

  function dispatch(action) {
    const newState = reducer(state, action)
    setState(newState)
  }

  return {
    dispatch,
    state
  }
}