require('../styles/main.scss');

import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'
import App from './App.jsx';
import Greetings from './Greetings.jsx';
import SignupPage from './SignupPage.jsx';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  (state = {}) => state, 
  applyMiddleware(thunk)
)
ReactDOM.render((
                  <Provider store={store}>
                    <Router>
                      <Route path="/" component={App}>
                    </Route>
                    </Router>
                  </Provider> ), document.getElementById('react-root'));
