import React, { useEffect, useState } from 'react'
import { getStudents } from '../../services/student'

export default function usePageStudents(page = 1, limit = 10) {
  const [resp, setResp] = useState([])
  useEffect(() => {
    (async () => {
      // const res = await getStudents(page, limit)
      // setResp(res)
    })()
  }, [page, limit])
  return resp
}
