import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import PrivateRoutes
import PrivateRoute from 'Routes/PrivateRoute'

//import pages
import Login from 'pages/login'
import Dashboard from 'pages/dashboard'
import LivestreamList from 'pages/livestream-list'
import MerchantList from 'pages/merchant-list'
import UserListing from 'pages/user-list'
import Tickets from 'pages/tickets'
import Categories from 'pages/categories'
import Analytic from 'pages/analytic'
import NotFound404 from 'pages/404'

//style from tailwindcss
import 'assets/css/main.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/livestream-list" component={LivestreamList} />
        <PrivateRoute path="/merchant-list" component={MerchantList} />
        <PrivateRoute path="/user-list" component={UserListing} />
        <PrivateRoute path="/tickets" component={Tickets} />
        <PrivateRoute path="/categories" component={Categories} />
        <PrivateRoute path="/analytic" component={Analytic} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </Router>
  );
}

export default App;
