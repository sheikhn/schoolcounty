
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import Listing from './containers/Listing'
import SchoolCompare from './containers/SchoolCompare'
import SchoolDetails from './containers/SchoolDetails'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}></Route>
        <Route path="/listing" component={Listing}></Route>
        <Route path="/compare" component={SchoolCompare}></Route>
        <Route path="/details" component={SchoolDetails}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
