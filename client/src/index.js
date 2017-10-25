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
import Contact from './Pages/Contact'
import About from './Pages/About'
import BlogPost from './Pages/Blog/BlogPost'
import reducers from './reducers'


const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const App = () => {
  return (
    <div>
      <section>
        <Switch >
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/blog" component={ Blog } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/blog/:postId" component={ BlogPost } />
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
