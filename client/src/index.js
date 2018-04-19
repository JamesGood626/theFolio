import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import TestScroll from './UtilComponents/testScroll'
import App from './App'
import 'normalize.css'
import './index.css'

import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path="/test-scroll" component={ TestScroll }/>
        <Route path="/*" component={ App }/>
      </Switch>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
