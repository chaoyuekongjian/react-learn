// 该模块为创建effect和判断effect提供支持

/**
 * effect的可用类型
 */
export const effectTypes = {
    CALL: 'CALL',
    TAKE: 'TAKE',
    PUT: 'PUT',
    FORK: 'FORK',
    ALL: 'ALL'
}

const effectName = '@@redux-saga/IO'

/**
 * 窗帘effect
 * @param {*} type 有效的effect类型
 * @param {*} payload 
 */
export function createEffect(type, payload) {
    // 验证types值
    if (!effectTypes[type]) {
        throw new TypeError('这是一个无效的type值')
    }
    return {
        type,
        payload,
        [effectName]: true
    }
}

/**
 * 判断一个对象是否是effect
 * @param {*} obj 
 * @returns 
 */
export function isEffect(obj) {
    if (typeof obj !== 'object') {
        return false
    }
    if (obj[effectName] === true) {
        return true
    }
    return false
}
