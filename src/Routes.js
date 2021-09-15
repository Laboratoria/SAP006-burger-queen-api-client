import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Pages/Login/Login';
import Registration from './Pages/Cadastro/Registration';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastre-se" component={Registration} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter> 
    );  
};

export default Routes;