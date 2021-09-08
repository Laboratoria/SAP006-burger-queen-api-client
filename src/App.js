import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404/index';
import Initial from './pages/Initial';

import { verifyPassword, verifyName } from './service';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Initial />
          <Login />
        </Route>

        <Route exact path="/register">
          <Initial />
          <Register verifyForms={{ password: verifyPassword, name: verifyName }} />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>

    </Router>

  );
}

// function sendUserForm(datas) {
//   console.log(datas);
// }

export default App;
