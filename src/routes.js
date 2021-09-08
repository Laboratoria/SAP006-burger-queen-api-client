import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Hall from './pages/Hall';
import Kitchen from './pages/Kitchen';
import Register from './pages/Register';

const Routes = () => 
		<Switch>
			<Route path="/" component={Login} exact />
			<Route path="/cadastro" component={Register} />
			<Route path="/salao" component={Hall} />
			<Route path="/cozinha" component={Kitchen} />
			<Route
				component={() => (
					<>
						<h1>404</h1>
						<p>Página não encontrada</p>
					</>
				)}
			/>
		</Switch>
	;
;

export default Routes;
