import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import Layout from './components/layout/Layout'

import store from './stores/store'

ReactDOM.render(
  <Provider store={ store }>
    <Layout />
  </Provider>,
  document.querySelector('#root')
)