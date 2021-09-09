import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Orders } from './pages/Orders'

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