import { createEffect, effectTypes } from "../effect-helper"
import { fork } from "./fork"
import { take } from "./take"


export function takeEvery(actionType, func, ...args) {
  return fork(function* () {
    while (true) {
      const action = yield take(actionType)
      yield fork(func, ...args.concat(action))
    }
  }, ...args)
}

export function runTakeEveryEffect(env, effect, next) {
  const { actionType } = effect.payload
  env.channel.take(actionType, action => {
    next(action)
  })
}