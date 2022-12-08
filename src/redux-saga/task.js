export default class Task {

  constructor(next, cbObj) {
    this.next = next
    this.cbObj = cbObj
    this.cbObj.callbacl = () => {
      console.log('迭代结束了')
      this.resolve()
    }
  }
    
  cancel() {
    this.next(null, null, true)
  }

  // 将当前的task转换为一个promise对象
  toPromise() {
    return new Promise((resolve, reject) => {
      this.resolve = resolve
    })
  }

}