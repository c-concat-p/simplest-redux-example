import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

import Counter from './components/Counter'
import store from './store/CounterStore'
import { increaseAction } from './actions/Actions'

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
