import React from 'react'
// import Test from './components/common/CheckBoxGroup/Test'
import { A, B } from './components/common/Comp'
import withLog from './HOC/withLog'

const ALog = withLog(A)
const BLog = withLog(B)

export default function App() {
    return (
        <div>
          <ALog a={123} />
          <BLog b={456} />
        </div>
    )
}