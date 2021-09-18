import React from "react";
import { Route, Redirect} from 'react-router-dom'

import { isLoggedKitchen } from '../../utils/auth'

export const PrivateRouteKitchen = props => isLoggedKitchen() ? <Route { ...props} /> : <Redirect to='/'/>
  
