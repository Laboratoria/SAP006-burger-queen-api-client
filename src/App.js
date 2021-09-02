import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Login from './pages/Login/index';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center"> Welcome to Krusty Krab! </Typography>

      <Login />

    </Container>
  );
}

export default App;
