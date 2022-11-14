import React from 'react'
import types from '../../../utils/CommonTypes'

// 实现根据数据渲染出的一组表单组件
export default function withDataGroup(Comp) {
  return class DataGroupWrapper extends React.Component {
    static defaultProps = {
      datas: []
    }

    static propTypes = {
      datas: types.groupDatas
    }

    render() {
      const comps = this.props.datas.map((it) => <Comp key={it.value} info={it} {...this.props} /> )
      return <>
        {comps}
      </>
    }
  }
}