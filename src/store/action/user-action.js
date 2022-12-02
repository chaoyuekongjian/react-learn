export const ADDUSER = Symbol('addUser')
export const DELETEUSER = Symbol('deleteUser')
export const UPDATEUSER = Symbol('updateUser')
export const SETUSERS = Symbol('setUsers')
export const SETLOADING = Symbol('setLoading')


export function getAddUserAction(user) {
  return {
    type: ADDUSER,
    payload: user
  }
}

export function getDeleteUserAction(id) {
  return {
    type: DELETEUSER,
    payload: id
  }
}

export function getUpdateUserAction(user) {
  return {
    type: UPDATEUSER,
    payload: user
  }
}

export function getSetUserAction(user) {
  return {
    type: SETUSER,
    payload: user
  }
}

export function getSetLoadingAction(isloading) {
  return {
    type: SETLOADING,
    payload: isloading
  }
}