import { createEffect, effectTypes } from "../effect-helper"
import runSaga from "../run-saga"

export function fork(generatorFunc, ...args) {
  return createEffect(effectTypes.FORK, {
    fn: generatorFunc,
    args
  })
}

export function runForkEffect(env, effect, next) {
  // 启动一个新的任务
  runSaga(env, effect.payload.fn, ...effect.effects.args)
  next() // 当前任务不会阻塞
}