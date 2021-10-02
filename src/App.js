import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from './pages/login/index';
import { Register } from './pages/register/index';
import { Hall } from './pages/hall/index';
import { Kitchen } from './pages/kitchen/index';
import { NotFound } from './pages/notFound/index';
//import PrivateRoute from './routes'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={(Login)} />
        <Route exact path="/login" component={(Login)} />
        <Route path="/register" component={(Register)} />
        <Route path="/hall" component={Hall} />
        <Route path="/kitchen" component={Kitchen} />
        <Route component={(NotFound)} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;

