import React from "react";
import { Switch, Route } from 'react-router-dom';
import Kitchen from "../pages/kitchen";
import Login from '../pages/Login/login'
import Registro from '../pages/Registro/registro'
import Pedidos from "../pages/pedidosPages";

function Routes() {
    return(
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/cozinha" component={Kitchen}></Route>
            <Route path="/salao"component={Pedidos}></Route>
            <Route path="/registrar"component={Registro}></Route>


        </Switch>
    )
}

export default Routes;
