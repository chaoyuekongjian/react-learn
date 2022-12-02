import usersReducer from './users'
import loginUserReducer from './login-user'
import { combineReducers } from '../../redux'

// const initialState = {
//   loginUser: null,
//   users: null
// }


export default combineReducers({
  loginUser: loginUserReducer,
  users: usersReducer
})