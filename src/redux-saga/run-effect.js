import { effectTypes } from "./effect-helper";
import { runAllEffect, runCallEffect, runCancelEffect, runForkEffect, runPutEffect, runSelectEffect, runTakeEffect } from "./effects";

/**
 * 处理effect对象
 * @param {*} env 全局的环境对象
 * @param {*} effect 
 * @param {*} next 下一个处理
 */
export default function (env, effect, next) {
    switch (effect.type) {
        case effectTypes.CALL:
            // 对call的处理
            runCallEffect(env, effect, next)
            break
        case effectTypes.PUT:
            runPutEffect(env, effect, next)
            break
        case effectTypes.SELECT:
            runSelectEffect(env, effect, next)
            break
        case effectTypes.TAKE:
            runTakeEffect(env, effect, next)
            break
        case effectTypes.FORK:
            runForkEffect(env, effect, next)
            break
        case effectTypes.CANCEL:
            runCancelEffect(env, effect, next)
            break
        case effectTypes.ALL:
            runAllEffect(env, effect, next)
            break
        default:
            throw new Error('类型错误')
    }
}