import React from 'react'
import Test from './components/common/RadioBoxGroup/Test'
import { A, B } from './components/common/Comp'
import withLog from './components/common/HOC/withLog'

const ALog = withLog(A)
const BLog = withLog(B)

export default function App() {
    return (
        <div>
          <Test />
        </div>
    )
}