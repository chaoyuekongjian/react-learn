import { effectTypes } from "./effect-helper";
import { runCallEffect } from "./effects/call";

/**
 * 处理effect对象
 * @param {*} env 全局的环境对象
 * @param {*} effect 
 * @param {*} next 下一个处理
 */
export default function(env, effect, next) {
    switch(effect.type) {
        case effectTypes.CALL:
            // 对call的处理
            runCallEffect(env, effect, next)
            break
        default:
            throw new Error('类型错误')
    }
}