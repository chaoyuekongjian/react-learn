import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Welcome from './pages/Welcome'
import StudentList from './pages/student/StudentList'
import StudentAdd from './pages/student/StudentAdd'



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Admin />} >
          <Route index element={<Welcome />} />
          <Route path="students" element={<StudentList />} />
          <Route path="students/add" element={<StudentAdd />} />
        </Route>
      </Routes>
    </Router>
  )
}
