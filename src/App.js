import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import View from './components/View'

ReactDOM.render(
  <Provider store={store}>
    <View />
  </Provider>,
  document.getElementById('root')
)
