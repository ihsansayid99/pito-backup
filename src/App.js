import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import PrivateRoutes
import PrivateRoute from 'Routes/PrivateRoute'

//import pages
import Login from 'pages/login'
import Dashboard from 'pages/dashboard'
import NotFound404 from 'pages/404'

//style from tailwindcss
import 'assets/css/main.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </Router>
  );
}

export default App;
