import { createStore } from 'redux'
import { DECREASE, INCREASE } from './action/action-type'
import { getIncreaseAction } from './action/number-action'
import reducer from './reducer'



const store = createStore(reducer)

console.log(store.getState())
// store.dispatch(getIncreaseAction())

export default store