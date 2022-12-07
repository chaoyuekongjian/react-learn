import { createEffect, effectTypes } from "../effect-helper"
import runSaga from "../run-saga"

export function cancel(task) {
  return createEffect(effectTypes.CANCEL, {
    task
  })
}

export function runCancelEffect(env, effect, next) {
  effect.payload.task.cancel()
  next()
}