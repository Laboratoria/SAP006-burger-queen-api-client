import { Route, Redirect } from 'react-router';
// import isAuth from './authRoutes';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {... rest} render={props => (
        true ? (
            <Component {... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )

    )}/>
);

export default PrivateRoute;

