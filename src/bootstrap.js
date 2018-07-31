import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

//import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Layout from './component/layout';

import Signup from './components/signup';
import Signin from './components/signin';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <HeaderWrapper>
            <Route path='/' exact component={Signin}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
          </HeaderWrapper>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
