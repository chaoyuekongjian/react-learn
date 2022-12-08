import Task from './task'
import isGenerator from 'is-generator'
import { isEffect } from './effect-helper'
import isPromise from 'is-promise'
import runEffect from './run-effect'

/**
 * 开启一个新任务
 * @param {*} env 全局环境的数据，被saga执行期共享的数据
 * @param {function} generatorFunc 生成器函数
 * @param {*} args 生成器函数的参数
 */
export default function(env, generatorFunc, ...args) {
    console.log('一个新的任务启动了')
    const generator = generatorFunc(...args)
    console.log(generator)
    if (isGenerator(generator)) { // 如果是生成器函数
        // 不断调用next 直到迭代结束
        // next()  
        return proc(env, generator)
    } else {
        console.log('普通函数')
    }

}

export function proc(env, iterator) {
    const cbObj = {
        callback: null
    }
    next()
    /**
     * 
     * @param {*} value 正常调用generator.next时，传递的值
     * @param {*} err 错误对象
     * @param {*} isOver 是否结束
     */
     function next(nextValue, err, isOver) {
        let result // 记录迭代的结果 { value: xxx, done: false | true }
        // 情况1：调用generator.next(value)
        // 情况2：调用generator.throw(value)
        // 情况3：调用generator.return()
        if (err) {
            result = iterator.throw(err)
        } else if (isOver) {
            cbObj.callback && cbObj.callback()
            result = iterator.retrun()
        } else {
            result = iterator.next(nextValue)
        }
        const { value, done } = result
        if (done) {
            // 迭代结束
            console.log('迭代器结束')
            cbObj.callback && cbObj.callback()
            return
        }
        // 如果没有结束
        if (isEffect(value)) {
            // 情况1：如果是一个effect
            console.log('是一个effect')
            runEffect(env, value, next)
        } else if (isPromise(value)) {
            // 情况2：value是一个promise
            value.then(r => next(r)).catch(err => next(null, err))
        } else {
            // 情况3：其他
            next(value)
        }
    }

    return new Task(next, cbObj)
}