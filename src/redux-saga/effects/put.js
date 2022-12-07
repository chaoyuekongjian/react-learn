import { createEffect, effectTypes } from "../effect-helper"

export function put(action) {
  return createEffect(effectTypes.PUT, {
      action
  })
}

export function runPutEffect(env, effect, next) {
  // const action = effect.payload.action
  // const result = env.store.dispatch(action)
  // next(result)
  next(env.store.dispatch(effect.payload.action))
}