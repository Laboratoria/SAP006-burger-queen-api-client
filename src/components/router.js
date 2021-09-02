import React from "react";
import { Switch, Route } from 'react-router-dom';
import Kitchen from "../pages/kitchen";
import Login from '../pages/login'
import Pedidos from "../pages/pedidosPages";

function Routes() {
    return(
        <Switch>
            <Route path="/1" component={Login}></Route>
            <Route path="/" component={Kitchen}></Route>
            <Route path="/3"component={Pedidos}></Route>

        </Switch>
    )
}

export default Routes;
