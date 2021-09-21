import { Route, Redirect } from 'react-router';
import isAuth from './authRoutes';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {... rest} render={props => (
        isAuth() ? (
            <Component {... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )

    )}/>
);

export default PrivateRoute;

