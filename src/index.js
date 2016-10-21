import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from 'CONTAINERS/App'
import Brand from 'CONTAINERS/Brand'
import configureStore from './configureStore'

import './base.css'
import 'bulma'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
      <Route path="/brand" component={Brand}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
