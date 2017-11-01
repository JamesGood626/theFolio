import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home/Home'
import App from './App'
import 'normalize.css'
import './index.css'

import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

// Want a different Transition from home to about, will finish up the rest of what I was already doing.
// But it seems like a daunting task.
ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/:id" component={ App }/>
      </Switch>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
