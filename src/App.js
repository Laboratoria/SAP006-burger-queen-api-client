import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from './pages/Login/login';
import { Register } from './pages/Register/register';
import { Hall } from './pages/Hall/hall';
import { Kitchen } from './pages/Kitchen/kitchen';
import { NotFound } from './pages/NotFound/notFound';
import PrivateRoute from './routes'
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={(Login)} />
        <Route exact path="/login" component={(Login)} />
        <Route path="/register" component={(Register)} />
        <PrivateRoute path="/hall" component={Hall} />
        <PrivateRoute path="/kitchen" component={Kitchen} />
        <Route component={(NotFound)} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
