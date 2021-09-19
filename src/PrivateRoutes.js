import { LoginWithEmail } from './services/Auth';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {... rest} render={props => (
        LoginWithEmail() ? (
            <Component {... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )

    )}/>
);

export default PrivateRoute;