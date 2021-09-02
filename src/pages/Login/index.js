import React from 'react';
import { TextField, Button } from '@material-ui/core';

function Login() {
  return (
    <form>
      <TextField id="email-auth" label="E-mail" variant="outlined" margin="normal" fullWidth />

      <TextField id="password-auth" label="Senha" variant="outlined" margin="normal" fullWidth />

      <Button id="btn-enter" type="submit" variant="contained" color="primary">
        Entrar
      </Button>

      <Button id="btn-register" type="submit" variant="contained" color="primary">
        Registrar
      </Button>

    </form>
  );
}

export default Login;
