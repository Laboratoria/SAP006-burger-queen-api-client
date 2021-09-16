import "./index.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/index.js";
import signUp from "./pages/signUp/index.js";
import Menu from "./pages/Salao/index.js";

import './pages/signUp/style.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={signUp}></Route>
        <Route path="/menu" component={Menu}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
