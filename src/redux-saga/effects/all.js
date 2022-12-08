import { createEffect, effectTypes } from "../effect-helper"
import runSaga, { proc } from "../run-saga"

export function all(generators) {
  return createEffect(effectTypes.CANCEL, {
    generators: generators || []
  })
}

export function runAllEffect(env, effect, next) {
  const generators = effect.payload.generators
  const tasks = generators.map(g => proc(env, g)).map(t => t.toPromise())
  Promise.all(tasks).then(() => next())
}