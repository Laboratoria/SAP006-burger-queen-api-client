import { Route, Redirect } from 'react-router';

const isAuthenticated = () => {
    const token = localStorage.setItem('userToken');
        if (token) {
            return true;
        } else {
            return false;
        }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {... rest} render={props => (
        isAuthenticated() ? (
            <Component {... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )

    )}/>
);

export default PrivateRoute;