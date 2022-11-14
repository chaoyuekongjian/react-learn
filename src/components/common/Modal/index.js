import React from 'react'
import "./index.css"
import PropTypes from 'prop-types'
import CommonTypes from '../../../utils/CommonTypes'

export default function Modal(props) {
    // var defaultProps = { //默认属性
    //     bg: "rgba(0,0,0,.5)"
    // };
    // var datas = Object.assign({}, defaultProps, props);

    return (
        <div onClick={e => {
            if (e.target.className === "modal") {
                props.onClose();
            }
        }} className="modal" style={{
            background: props.bg
        }}>
            <div className="modal-center">
                {props.children}
            </div>
        </div>
    )
}

Modal.defaultProps = {
    bg: "rgba(0,0,0,.5)"
}

Modal.propTypes = {
    children: CommonTypes.children,
    bg: PropTypes.string,
    onClose: PropTypes.func
}