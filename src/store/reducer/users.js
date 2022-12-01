import * as userAction from '../action/user-action'
import { v4 as uuid } from 'uuid'

const initState = [
  { id: uuid(), name: '用户1', age: 11 },
  { id: uuid(), name: '用户2', age: 11 },
]

export default (state = initState, { type, payload }) => {
  switch (type) {
    case userAction.ADDUSER:
      return [...state, payload]
    case userAction.DELETEUSER:
      return state.filter(it => it.id !== payload)
    case userAction.UPDATEUSER:
      return state.map(it => it.id === payload.id ? { ...it, ...payload } : it)
    default:
      return state
  }
}