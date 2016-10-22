import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from 'CONTAINERS/App'
import Brand from 'CONTAINERS/Brand'
import Note from 'CONTAINERS/Note'
import configureStore from './configureStore'

// import './assets/scss/variables.scss'
import './assets/scss/base.scss'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="brand" component={Brand} />
        <Route path="note" component={Note} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
