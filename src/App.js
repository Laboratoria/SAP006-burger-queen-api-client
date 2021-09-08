import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App () {
  return (
    <BrowserRouter>
      <Route path='/' exact={true} component={Login} />
      <Route path='/register' component={Register} />
    </BrowserRouter> 
  )
}

export default App;