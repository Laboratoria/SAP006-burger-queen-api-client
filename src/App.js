import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";
import Menu from './Pages/Menu/menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Cadastro">
         <Register />
        </Route>
        <Route path exact="/">
          <Login />
        </Route>
        <Route path="/Menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
