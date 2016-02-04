import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import View from './components/View'

let store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <View />
  </Provider>,
  document.getElementById('root')
)
