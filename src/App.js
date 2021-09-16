import React from 'react';
//import Routes from './routes';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from './pages/Login/login';
import { Register } from './pages/Register/register';
import PrivateRoute from './routes'
import './index.css'

/*const App = () => <Routes />;*/


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={(Login)} />
        <Route exact path="/login" component={(Login)} />
        <Route path="/register" component={(Register)} />
        <Route component={() => <div>Page 404!</div>} />
        <PrivateRoute path="/app"component={()=> <h1>Você está logado</h1>} />
      </Switch>
    </BrowserRouter>
  );
}


/*function App() {
  return (
    <div className="App">
     <h1>Best's Burguer</h1>
    </div>
  );
}*/

export default App;
