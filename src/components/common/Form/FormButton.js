import React from 'react'
// import PropTypes from 'prop-types'
import { Consumer } from './formContext'

export default function FormButton(props) {
  return (
    <Consumer>
      {
        ctx => {
          return (
            <button onClick={() => {
              ctx.submit();
            }}>{props.children}</button>
          )
        }
      }
    </Consumer>
  )
}
