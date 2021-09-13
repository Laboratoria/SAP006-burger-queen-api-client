import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import SignUp from './pages/signup/signup.jsx';
import Menu from './pages/menu/menu.jsx'
import Kitchen from './pages/kitchen/kitchen';
import Orders from './pages/orders/orders';
import NotFound from './pages/notfound/notfound';
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/menu' component={Menu} />
          <Route path='/kitchen' component={Kitchen} />
          <Route path='/orders' component={Orders} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
