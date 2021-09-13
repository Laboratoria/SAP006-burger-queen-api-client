import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
// import Tables from './Pages/Login/Login'
// import OrderStatus from './Pages/Login/Login'
// import Kitchen from './Pages/Login/Login'


const Routes = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            
            <Route path='/register'>
                <Register />
            </Route>

            {/* <Route path='/tables'>
                <Tables />
            </Route>

            <Route path='/orders-status'>
                <OrderStatus />
            </Route>

            <Route path='/kitchen'>
                <Kitchen />
            </Route> */}
        </Switch>
    )
};

export default Routes;