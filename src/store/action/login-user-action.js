
export const SETLOGINUSERTYPE = Symbol('set-login-user');

/**
 * 设置登录用户的action
 * @param {*} user 
 * @returns 
 */
export const createSetLoginUserAction = (user) => ({
  type: SETLOGINUSERTYPE,
  payload: user
})
