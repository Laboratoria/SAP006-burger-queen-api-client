
import Routes from './Routes'

import { 
  BrowserRouter as Router, 
  Link, 
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes> 
        <h1>Vixi!</h1>

        <Link to='/'>Login</Link>
        <Link to='/register'>Cadastro</Link>
     
      </Routes>
    </Router>
 

  );
}

export default App;
