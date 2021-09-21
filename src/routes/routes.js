import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import Login from '../pages/login/login.jsx';
import SignUp from '../pages/signup/signup.jsx';
import Menu from '../pages/menu/menu.jsx';
import Kitchen from '../pages/kitchen/kitchen.jsx';
import Orders from '../pages/orders/orders.jsx';
import NotFound from '../pages/notfound/notfound.jsx';
import PrivateRoute from '../routes/privateRoute';


const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={SignUp} />
          <PrivateRoute path='/menu' exact component={Menu} />
          <PrivateRoute path='/kitchen' exact component={Kitchen} />
          <PrivateRoute path='/orders' exact component={Orders} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
