import React from 'react';
import { Route, Switch, BrowserRouter, useHistory} from 'react-router-dom'

import { NotFound } from '../../pages/notFound/NotFound'
import { Unauthorized } from '../../pages/unauthorized/Unauthorized'

import { Login } from '../../pages/auth/Login'
import { Register } from '../../pages/auth/Register';

import { Room } from '../../pages/room/Room'
import { Kitchen } from '../../pages/kitchen/Kitchen'

import { PrivateRouteRoom } from '../routeComponents/private/PrivateRouteRoom';
import { PrivateRouteKitchen } from '../routeComponents/private/PrivateRouteKitchen';

import { PublicRoute } from '../routeComponents/public/PublicRoute';

export const Root = () => {
  const history = useHistory()
  return (
      <BrowserRouter history={history}>
        <Switch>
          <PublicRoute path='/' exact={true} component={Login} />
          <PublicRoute path='/register' exact={true} component={Register} />
          <Route path='/unauthorized' exact={true} component={Unauthorized}/>
          <PrivateRouteRoom path='/room' exact={true} component={Room} />
          <PrivateRouteKitchen path='/kitchen' exact={true} component={Kitchen} />
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
  )
}
  