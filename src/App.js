import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Orders } from './pages/currentOrders/Orders'

function App () {
  return (
    <BrowserRouter>
      <Route path='/' exact={true} component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/orders' component={Orders} />
    </BrowserRouter> 
  )
}

export default App;