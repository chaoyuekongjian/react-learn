import PropTypes from 'prop-types'

const types = {
  children: PropTypes.node,
  groupDatas: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })),
  chooseDatas: PropTypes.arrayOf(PropTypes.string),
  singleDatas: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default types