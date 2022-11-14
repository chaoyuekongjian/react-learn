import React, { Component } from 'react'
import CommonTypes from '../../../utils/CommonTypes'
import PropTypes from 'prop-types'
import withDataGroup from '../HOC/withDataGroup'

class Radio extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired, // 当前单选框的value
        value: PropTypes.string.isRequired, // 当前选中的value
        onChange: PropTypes.func
    }

    handleChange = () => {
        this.props.onChange && this.props.onChange(this.props.info.value)
    }

    render() {
        return (
            <label>
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.value === this.props.info.value}
                    onChange={this.handleChange}
                />
                {this.props.info.text}
            </label>
        )
    }
}

const radios = withDataGroup(Radio)
/**
 * 一组单选框
 */
export default radios