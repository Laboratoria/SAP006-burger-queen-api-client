import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "../src/pages/index/index.js";
import Cadastro from "../src/pages/cadastro/cadastro.js";
import Login from "../src/pages/login/login.js";
import Pedidos from "../src/pages/pedidos/pedidos.js";
import NotFound from "../src/pages/notfound/notfound.js";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/index" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/pedidos" component={Pedidos} />
         <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default Rotas;
