import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './index.css';


import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Book from './components/Book.jsx';


render(
  <Router>
    <div>
      <Route exact path="/" component={App} />

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/book/search" component={Book} />

    </div>
  </Router>,
  document.getElementById('root')
);






