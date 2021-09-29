import Login from '../pages/login';
import Hall from '../pages/hall';
import CreateUser from '../pages/create-user';
import Kitchen from '../pages/kitchen';
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoutes from './private-routes';

function App() {
  return(
    <BrowserRouter>
      <Route path='/' exact component={Login}/>
      <Route path='/cadastrar' component={CreateUser}/>
      <PrivateRoutes path='/salão' component={Hall}/>
      <PrivateRoutes path='/cozinha' component={Kitchen}/>
    </BrowserRouter>
    
  )
}
export default App;