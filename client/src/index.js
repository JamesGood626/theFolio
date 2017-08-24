import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { TransitionGroup } from 'react-transition-group'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import 'normalize.css'
import './index.css'

import FadeTransition from './Pages/fadeTransition'
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const App = (props) => {
  const locationKey = props.location.pathname
  
  return (
    <div>
      <TransitionGroup>
        <FadeTransition key={ locationKey }>
          <section className="fix-container">
            <Switch location= { props.location }>
              <Route exact path="/" component={ Home } />
              <Route exact path="/blog" component={ Blog } />
            </Switch>
          </section>
        </FadeTransition>
      </TransitionGroup>
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
