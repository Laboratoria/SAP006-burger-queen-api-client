import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import './global.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Hall from './pages/Hall/Hall';
import Kitchen from './pages/Kitchen/Kitchen';
// import { SettingsBackupRestore } from '@material-ui/icons';


function App(user) {
    // const user = true;

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>  
                    <Login />
                </Route>
                <Route path='/login' >
                    <Login />
                </Route>
                <Route path='/register'> 
                    <Register />
                </Route>
                <Route path='/salao'> 
                    {user ? <Hall /> : <Redirect to="/" />}  
                </Route>
                <Route path='/cozinha'> 
                    {user ? <Kitchen /> : <Redirect to="/" />}  
                </Route>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
