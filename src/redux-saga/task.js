export default class Task {

  constructor(next) {
    this.next = next
  }
    
  cancel() {
    this.next(null, null, true)
  }

}