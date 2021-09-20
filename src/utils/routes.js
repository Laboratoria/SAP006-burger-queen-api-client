import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hall from '../pages/hall/index.js';
import Kitchen from '../pages/kitchen/index.js';
import Login from '../pages/login/index.js';
import NotFound from '../pages/notfound/index.js'
import Register from '../pages/register/index.js';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/hall' component={Hall} />
                <Route exact path='/kitchen' component={Kitchen} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;