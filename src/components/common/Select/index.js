import React, { Component } from 'react'
import CommonTypes from '../../../utils/CommonTypes'
import PropTypes from 'prop-types'
import withDataGroup from '../HOC/withDataGroup'

class Options extends React.Component {
  static propTypes = {
    info: CommonTypes.singleDatas
  }

  render() {
    return (
      <option value={this.props.info.value}>
        {this.props.info.text}
      </option>
    )
  }

}

const OptGroup = withDataGroup(Options)

/**
 * 一组单选框
 */
export default class Select extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }

  render() {
    return (
      <select name={this.name} value={this.props.value} onChange={(e) => {
        this.props.onChange && this.props.onChange(e.target.value)
      }}>
        <OptGroup {...this.props}></OptGroup>
      </select>
    )
  }
}
