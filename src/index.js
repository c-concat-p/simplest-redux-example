import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/CounterStore'
import devices from './reducers/devices'
import { Provider } from 'react-redux'
import { fetchDevices } from './actions/Actions'

import App from './App'

let store = createStore(devices)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
