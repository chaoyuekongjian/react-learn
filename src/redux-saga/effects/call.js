import { createEffect, effectTypes } from "../effect-helper"
import isPromise from 'is-promise'

// 1. 提供一个call函数 用于参数call effect
export function call(fn, ...args) {
    let context = null // this指向
    let func = fn // 需要运行的函数
    if (Array.isArray(fn)) {
        context = fn[0]
        func = fn[1]
    }
    return createEffect(effectTypes.CALL, {
        context,
        fn: func,
        args
    })
}

// 2. 处理call effect
export function runCallEffect(env, effect, next) {
    const { context, fn, args } = effect.payload
    // d调用函数得到函数的结果
    const result = fn.call(context, ...args)
    if (isPromise(result)) {
        result.then(v => next(v)).catch(err => next(null, err))
        return
    }
    next(result)
}