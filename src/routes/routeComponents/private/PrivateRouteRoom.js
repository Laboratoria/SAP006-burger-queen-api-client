import React from "react";
import { Route, Redirect} from 'react-router-dom'

import { isLoggedRoom } from '../../utils/auth'

export const PrivateRouteRoom = props => 
  isLoggedRoom() 
  ? <Route { ...props} /> : <Redirect to='/'/>
  
