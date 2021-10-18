import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Hall } from './pages/hall/hall';
import { Kitchen } from './pages/kitchen/kitchen';
import { NotFound } from './pages/notfound/notfound';
//import PrivateRoute from './routes'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={(Login)} />
        <Route path="/login" exact component={(Login)} />
        <Route path="/register" component={(Register)} />
        <Route path="/hall" component={(Hall)} />
        <Route path="/kitchen" component={(Kitchen)} />
        <Route component={(NotFound)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;