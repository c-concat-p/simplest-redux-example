import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

// React component
class Counter extends React.Component {
  render () {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

export default Counter;
