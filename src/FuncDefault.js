import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FuncDefault extends Component {
  static propTypes = {
    a: PropTypes.number.isRequired
  }

  render() {
    return (
      <div>FuncDefault</div>
    )
  }
}
