// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/login.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"  component={Login}>
          {/* <Login /> */}
          </Route>
        </Switch>
      </div>
      {/* // <Route path="/login" exact component={Login} /> */}
    </Router>
  );
}

export default App;
