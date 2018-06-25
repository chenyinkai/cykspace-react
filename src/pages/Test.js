import React from 'react'
// import PropTypes from 'prop-types'

class Test extends React.Component {
  // static propTypes = {
  //   value: PropTypes.number.isRequired,
  //   onIncreaseClick: PropTypes.func.isRequired
  // }
  render() {
    const { value, onIncreaseClick } = this.props
    // console.log(this.props)
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

export default Test
