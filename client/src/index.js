import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import 'normalize.css'
import './index.css'

import Home from './Pages/Home/Home'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>  
    </BrowserRouter>
  </Provider> 
, document.getElementById('root'))
registerServiceWorker()
