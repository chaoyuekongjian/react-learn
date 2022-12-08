import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import CounterContainer from '../../components/Counter'

export default function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <span>作者：李义</span>
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    </div>
  )
}
