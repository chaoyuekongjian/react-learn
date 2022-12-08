import React from 'react'
// import store from '../store'
import { connect } from 'react-redux'
import { decrease, increase } from '../store/action/counter'

function Counter(props) {
  return (
    <div>
      <div>{props.number}</div>
      <button onClick={props.onAsyncDecreaase}>异步减</button>
      <button onClick={props.onDecreaase}>减</button>
      <button onClick={props.onIncreaase}>加</button>
      <button onClick={props.onAsyncIncreaase}>异步加</button>
    </div>
  )
}

function mapToProps(props) {
  console.log(props)
  return {
    number: props.counter
  }
}

function mapToDispatch(dispatch) {
  return {
    onIncreaase: () => {
      dispatch(increase())
    },
    onDecreaase: () => {
      dispatch(decrease())
    }
  }
}

const hoc = connect(mapToProps, mapToDispatch)

export default hoc(Counter)
// counter组件的数据来自于仓库
// export default class CounterContainer extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = mapToProps(store.getState())
//     store.subscribe(() => {
//       this.setState(mapToProps(store.getState()))
//     })
//   }

//   render() {
//     const handlers = mapToDispatch(store.dispatch)
//     return <Counter {...this.state} {...handlers} />
//   }
// }