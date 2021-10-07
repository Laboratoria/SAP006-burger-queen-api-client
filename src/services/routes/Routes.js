import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../../pages/mainHall/login/Login';
import Register from '../../pages/mainHall/register/Register';
import Menus from '../../pages/mainHall/menus/Menus';
import Requests from '../../pages/mainHall/requests/Requests';
import Preparation from '../../pages/kitchen/Preparation';
import NotFound from '../../pages/notFound/NotFound';
import PrivateRoute from '../routes/PrivateRoutes';

function Routes(){
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastre-se" component={Register} />
                <Route path="/notfound" component={ NotFound }/>
                <PrivateRoute path="/menus" component={ Menus }/>
                <PrivateRoute path="/pedidos" component={ Requests }/>
                <PrivateRoute path="/preparacao" component={ Preparation }/>
            </Switch>
        </BrowserRouter> 
    );  
};

export default Routes;

// O Router (BrowserRouter) é um componente responsável por 
// fazer o roteamento dos nossos componentes. 
// O Switch é feito para comparar as Route e iterará sobre todos 
// os seus elementos e renderizará o primeiro que corresponda ao local atual.
// O Route é o componente responsável por determinada rota do sistema.