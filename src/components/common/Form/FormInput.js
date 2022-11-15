import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './formContext'

// 一定处于上下文中
export default class FormInput extends Component {

  static contextType = ctx

  propTypes = {
    name: PropTypes.string.isRequired, // 文本框的名称
    type: PropTypes.string.isRequired, // 文本框的类型
  }

  defaultProps = {
    type: 'text',
  }

  render() {
    return (
      <input 
      value={this.context.formData[this.props.name] || ''} 
      onChange={e => {
        this.context.changeFromData(this.props.name, e.target.value)
      }}
      type={this.props.type} />
    )
  }
}
