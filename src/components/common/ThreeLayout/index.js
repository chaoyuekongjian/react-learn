import React from 'react'
import "./index.css"
import PropTypes from 'prop-types'
import CommonTypes from '../../../utils/CommonTypes'

ThreeLayout.defaultProps = {
  leftWidth: 200,
  rightWidth: 200,
  minWidth: 800,
  gap: 0, //间隙
  left: PropTypes.node
}

ThreeLayout.propTypes = {
  leftWidth: PropTypes.number,
  rightWidth: PropTypes.number,
  minWidth: PropTypes.number,
  gap: PropTypes.number, //间隙
  left: PropTypes.node,
  right: PropTypes.node
}

export default function ThreeLayout(props) {
  return (
    <div className="three-layout" style={{
      minWidth: props.minWidth
    }}>
      <div className="main">
        {props.children}
      </div>
      <div className="aside-left" style={{
        width: props.leftWidth,
        marginRight: props.gap
      }}>
        {props.left}
      </div>
      <div className="aside-right" style={{
        width: props.rightWidth,
        marginLeft: props.gap
      }}>
        {props.right}
      </div>
    </div>
  )
}
