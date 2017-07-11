import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//C:\Users\abimbola\Desktop\Javascript\sailsproject\bookstore\frontend\src\font-awesome.css
import './index.css';


import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Book from './components/Book.jsx';
import Order from './components/Order.jsx';
import Admin from './components/Admin.jsx';
import Adminuser from './components/Order.jsx';
import Adminadd from './components/Adminadd.jsx';


render(
  <Router>
    <div>
 
      <Route exact path="/" component={App} />

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/book/search" component={Book} />
      <Route path="/order" component={Order} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/user" component={Adminuser} />
      <Route path="/addbook" component={Adminadd} />
    
    </div>
  </Router>,
  document.getElementById('root')
);






