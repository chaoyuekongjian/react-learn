import { INCREASE, DECREASE } from '../../action/counter'

export default function(state = 10, { type }) {
  switch (type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state
  }
}