import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css'
import './index.css'

import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'
import reducers from './reducers'


const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const App = () => {
  return (
    <div>
      <section className="fix-container">
        <Switch >
          <Route exact path="/" component={ Home } />
          <Route exact path="/blog" component={ Blog } />
        </Switch>
      </section>
    </div>  
  )
}

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Route path="/" component={ App } />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
