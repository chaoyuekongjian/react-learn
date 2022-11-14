import React, { Component } from 'react'
import CommonTypes from '../../../utils/CommonTypes'
import PropTypes from 'prop-types'

/**
 * 一组单选框
 */
export default class RadioBoxGroup extends Component {

    static defaultProps = {
        datas: [],
        value: []
    }

    static propTypes = {
        datas: CommonTypes.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func // 约束为函数 但不是必填
    }


    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }

    /**
     * 得到一组单选框
     */
    getRadios() {
        return this.props.datas.map(it => (
            <label key={it.value}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={it.value}
                    checked={this.props.value === it.value}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ));
    }

    render() {
        const bs = this.getRadios();
        return (
            <div>
                {bs}
            </div>
        )
    }
}
