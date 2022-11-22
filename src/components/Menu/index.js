import React from 'react'
import './index.css'

export default function Menu() {
  return (
    <ul className="menu">
      <li><a href="/">主界面</a></li>
      <li><a href="/students">学生管理</a></li>
      <li><a href="/students/add">学生列表</a></li>
      <li><a href="/courses">课程列表</a></li>
      <li><a href="/courses/add">添加课程</a></li>
    </ul>
  )
}
