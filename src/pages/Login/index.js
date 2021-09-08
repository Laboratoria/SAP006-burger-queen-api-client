import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
} from '@material-ui/core';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container component="article" maxWidth="sm">

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email-auth"
          label="E-mail"
          type="email"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="password-auth"
          label="Senha"
          type="password"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button id="btn-enter" type="submit" variant="contained" color="primary">
          Entrar
        </Button>

        <Link to="/register">
          <Button id="btn-register" type="submit" variant="contained" color="primary">
            Registrar
          </Button>

        </Link>

      </form>

    </Container>
  );
}

export default Login;
