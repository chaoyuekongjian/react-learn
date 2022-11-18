import React from 'react'
import usePageStudents from './components/myHook/usePageStudents'
import StudentContainer from './components/StudentContainer'

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

export default function App() {

  return (
    <Test />
  )
}