import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Login from '../../pages/mainHall/login/Login';
import Registration from '../../pages/mainHall/register/Register';
import Tables from '../../pages/mainHall/tables/Tables';
import Menus from '../../pages/mainHall/menus/Menus';
import Pedidos from '../../pages/mainHall/requests/Requests';
import Historico from '../../pages/mainHall/historic/Historic';
// import Preparacao from '../../pages/kitchen/';
// import Finalizado from '../../pages/kitchen/';
import NotFound from '../../pages/notFound/NotFound';
import PrivateRoute from '../routes/PrivateRoutes';

function Routes(){
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastre-se" component={Registration} />
                <Route path="/menus" component={Menus} />
                <Route path="/pedidos" component={Pedidos} />
                <Route path="/historico" component={Historico} />
                <Route path="/notfound" component={NotFound} />

                <PrivateRoute path="/mesas" component={ Tables }/>

                <Route path="*" element={<h1>Not Found</h1>} />                                
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