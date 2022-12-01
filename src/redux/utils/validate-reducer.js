import ActionTypes from './action-types';
import { isPlainObject } from './is-plain-object';

export default function(reducers) {
  if (typeof reducers !== 'object') {
    throw new TypeError('reducers must be an object')
  }
  if (!isPlainObject(reducers)) {
    throw new TypeError('reducers must be a plain object')
  }
  // 验证reducer的返回结果是不是undefined
  for (const key in reducers) {
    if (Object.hasOwnProperty.call(reducers, key)) {
      const reducer = reducers[key];
      let state = reducer(undefined, {
        type: ActionTypes.INIT()
      })
      if (state === undefined) throw new TypeError('state must not return undefined')
      state = reducer(undefined, {
        type: ActionTypes.UNKNOWN()
      })
      if (state === undefined) throw new TypeError('state must not return undefined')
    }
  }
}