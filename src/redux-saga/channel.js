
// 订阅频道
export default class Channel {
  listener: {}

  /**
   * 添加一个订阅者
   * @param {*} prop 属性名
   * @param {*} func 订阅函数
   */
  take(prop, func) {
    if (this.listener[prop]) {
      this.listener[prop].push(func)
      return
    }
    this.listener[prop] = [func]
  }

  /**
   * 发布一个订阅
   * @param {*} prop 属性名
   * @param  {...any} arg 额外的参数
   */
  put(prop, ...args) {
    if (this.listener[prop]) {
      const list = this.listener[prop]
      for (const iterator of list) {
        iterator(args)
      }
      delete this.listener[prop] // 删除订阅
    }
  }
}