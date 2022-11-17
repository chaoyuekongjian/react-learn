import React, { useState, useEffect } from 'react'
import { getStudents } from '../../services/student'
import StudentList from '../StudentList'
import Pager from '../common/Pager'

// 用于提供数据，已经控制状态的变化
export default function StudentContainer() {

  const [students, setStudents] = useState([])
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [panelNumber] = useState(5)

  useEffect(() => {
    (async () => {
      // const res = await getStudents(page, limit)
      // setStudents(res.findByPage)
      // setTotal(res.cont)
    })();
  }, [page, limit]) // 空数组的作用，是让该副作用函数没有任何依赖项，从而仅在首次挂载时运行

  const pageChanged = (page) => {
    setPage(page)
  }

  return (
    <div>
      <StudentList stus={students} />
      <Pager
        current={page}
        limit={limit}
        total={total}
        panelNumber={panelNumber}
        onPageChange={pageChanged}
      />
    </div>
  )
}
