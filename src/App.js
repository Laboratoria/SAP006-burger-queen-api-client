import { BrowserRouter as Router, Route } from "react-router-dom";

import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";
//import Menu from './Pages/Menu/menu';

function App() {
  return (
    <Router>
      <Route path="/Cadastro">
        <Register />
      </Route>
      <Route path exact="/">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
