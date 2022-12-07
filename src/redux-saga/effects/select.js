import { createEffect, effectTypes } from "../effect-helper"

export function select(fn) {
  return createEffect(effectTypes.SELECT, {
      fn
  })
}


export function runSelectEffect(env, effect, next) {
  let state = env.store.getState()
  if (effect.payload.fn) {
    state = effect.payload.fn(state)
  }
  console.log(state)
  next(state)
}