import React from 'react';
import { TextField, Button } from '@material-ui/core';

function Register() {
  return (
    <form>
      <TextField id="name-register" label="Nome" variant="outlined" margin="normal" fullWidth />

      <TextField id="email-register" label="Nome" variant="outlined" margin="normal" fullWidth />

      <TextField id="role-register" label="Cargo" variant="outlined" margin="normal" fullWidth />

      <TextField id="password-register" label="Senha" variant="outlined" margin="normal" fullWidth />

      <Button id="new-register" type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>

    </form>
  );
}

export default Register();
