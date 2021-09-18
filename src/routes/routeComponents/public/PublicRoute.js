import React from "react";
import { Route, Redirect} from 'react-router-dom'

import { isLogged } from '../../utils/auth'

export const PublicRoute = props => isLogged() ? <Redirect to='/unauthorized'/> : <Route { ...props} /> 
