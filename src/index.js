import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'

import store from '@/stores/store'

//引入mock.js
require ("@/axios/mock.js")

//layout
import Page from '@/pages/Page'
import RouteConfigExample from '@/components/app/RouteConfigExample'

ReactDOM.render(
  <AppContainer>
    <Provider store={ store }>
      <Page />
    </Provider>
  </AppContainer>,
  document.querySelector('#root')
)

if(module.hot){
  module.hot.accept();
}
