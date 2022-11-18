import React, {useState} from 'react'
import usePageStudents from './components/myHook/usePageStudents'
import StudentContainer from './components/StudentContainer'
import useReducer from './components/myHook/useReducer'

function Test() {
  const stus = usePageStudents(1, 10)
  console.log(stus.findByPage)
  if (stus.findByPage) {
    const list = stus.findByPage.map((item) => <li key={item.id}>{item.name}</li>)
    return <ul>
      {list}
    </ul>
  }
  return null
}

/**
 * 该函数，根据当前的数据，以及action，生成一个新的数据
 * 必须是纯函数，不能有副作用
 * @param {*} state 
 * @param { { type: string } } action 
 */
function reducer(state, action) {
  switch(action.type) {
    case 'increase':
      return state + 1
    case 'decrease':
      return state - 1
    default:
      return state
  }
}

export default function App() {
  const { state, dispatch } = useReducer(reducer, 0)
  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'decrease'})
      }}>-</button>
      <div>{state}</div>
      <button onClick={() => {
        dispatch({ type: 'increase' })
      }}>+</button>
    </>
  )
}