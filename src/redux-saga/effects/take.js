import { createEffect, effectTypes } from "../effect-helper"

export function take(actionType) {
  return createEffect(effectTypes.TAKE, {
    actionType
  })
}


export function runTakeEffect(env, effect, next) {
  const { actionType } = effect.payload
  env.channel.take(actionType, (action) => {
    // 订阅函数，当action发生的时候所需要运行的函数
    next(action)
  })
}