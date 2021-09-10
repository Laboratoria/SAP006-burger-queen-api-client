import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signup.jsx';
import Menu from './pages/menu.jsx';
import Kitchen from './pages/kitchen.jsx';
import Orders from './pages/orders.jsx';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
