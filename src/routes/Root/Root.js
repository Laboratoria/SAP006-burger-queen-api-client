import React from 'react';
import { Route, Switch, BrowserRouter, useHistory} from 'react-router-dom'

import { NotFound } from '../../pages/notFound/NotFound'
import { Unauthorized } from '../../pages/unauthorized/Unauthorized'

import { Login } from '../../pages/auth/Login'
import { Register } from '../../pages/auth/Register';

import { Room } from '../../pages/room/Room/Room'
import { Kitchen } from '../../pages/kitchen/Kitchen'

import { Menu } from '../../pages/room/Menu/Menu';
import { OrdersBeingPrepared } from '../../pages/room/OrdersBeingPrepared/OrdersBeingPrepared'
import { OrdersReady } from '../../pages/room/OrdersReady/OrdersReady'
import { OrdersDelivered} from '../../pages/room/OrdersDelivered/OrdersDelivered'


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
          <PrivateRouteRoom path='/menu' exact={true} component={Menu} />
          <PrivateRouteRoom path='/orders/being-prepared' exact={true} component={OrdersBeingPrepared} />
          <PrivateRouteRoom path='/orders/ready' exact={true} component={OrdersReady} />
          <PrivateRouteRoom path='/orders/delivered' exact={true} component={OrdersDelivered} />
          
          <PrivateRouteKitchen path='/kitchen' exact={true} component={Kitchen} />
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
  )
}
  
