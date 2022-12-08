import React from 'react'
import ctx from './ctx'
import { bingActionCreator } from 'redux'


export default function(mapStateToProps, mapStateToDispatch) {
  // 返回一个高阶函数
  return function(Comp) {
    class Temp extends React.Component {
      static contextType = ctx

      constructor(props, context) {
        super(props, context)
        this.store = context
        if (mapStateToProps) {
          // 状态中的数据，来自于仓库中映射的结果
          this.state = mapStateToProps(this.store.getState(), this.props)
          // 监听仓库中数据的变化，会得到取消
          this.unlisten = this.store.subscribe(() => {
            this.setState(mapStateToProps(this.store.getState(), this.props))
          })
        }
        if (mapStateToDispatch) {
          this.handlers = this.getEventHandlers()
        }
      }

      // 得到需要传递的事件属性
      getEventHandlers() {
        if (typeof mapStateToDispatch === 'function') {
          return mapStateToDispatch(this.store.dispatch)
        }
        if (typeof mapStateToDispatch === 'object') {
          return bingActionCreator(mapStateToProps, this.store.dispatch)
        }
      }

      componentWillUnmount() {
        this.unlisten && this.unlisten()
      }

      render() {

        return <Comp {...this.state} {...this.handlers} {...this.props} />
      }
    }
    Temp.displayName = Comp.displayName || Comp.name
    return Temp
  }
}