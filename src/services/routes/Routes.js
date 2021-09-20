import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../../pages/mainHall/login/Login';
import Registration from '../../pages/mainHall/register/Register';
import Mesas from '../../pages/mainHall/tables/Tables';
import PrivateRoute from '../routes/PrivateRoutes'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastre-se" component={Registration} />
                
                <PrivateRoute path="/mesas" component={ Mesas }/>
                <Route path="*" element={<h1>Not Found</h1>} />                                
            </Switch>
        </BrowserRouter> 
    );  
};

export default Routes;