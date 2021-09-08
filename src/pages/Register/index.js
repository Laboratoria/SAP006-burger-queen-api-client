import React, { useState } from 'react';
import {
  TextField, Button, Container, Typography, FormControl, FormLabel,
  FormControlLabel, RadioGroup, Radio,
} from '@material-ui/core';

function Register(validation) {
  const [role, setRole] = useState('saloon');
  const [nameUser, setNameUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ password: { valid: true, text: '' }, nameUser: { valid: true, text: '' } });

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  function verifyInput(e) {
    const { name, value } = e.target;
    const newState = { ...errors };
    newState[name] = validation[name](value);
    setErrors(newState);
  }

  function verifyNewUser() {
    // eslint-disable-next-line no-restricted-syntax
    for (const verifyPlace in errors) {
      if (!errors[verifyPlace].valid) {
        return false;
      }
    }
    return true;
  }

  return (
    <Container component="article" maxWidth="sm">
      <main>
        <Typography variant="h5" component="h1" align="center"> Realizar cadastro </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (verifyNewUser()) {
              console.log(role, nameUser, email, password);
            }
            // eslint-disable-next-line object-curly-newline
          }}
        >
          <TextField
            value={nameUser}
            onSubmit={(e) => {
              setNameUser(e.tagret.value);
            }}
            id="name-register"
            name="nome"
            label="Nome"
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            value={email}
            onSubmit={(e) => {
              setEmail(e.target.value);
            }}
            id="email-register"
            label="E-mail"
            type="email"
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">Função</FormLabel>
            <RadioGroup row aria-label="role" name="role" value={role} onChange={handleChange}>
              <FormControlLabel value="saloon" control={<Radio />} label="Salão" />
              <FormControlLabel value="kitchen" control={<Radio />} label="Cozinha" />
            </RadioGroup>
          </FormControl>

          <TextField
            value={password}
            onSubmit={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={{ verifyInput }}
            error={!errors.password.valido}
            helperText={errors.password.text}
            id="password-register"
            name="senha"
            label="Senha"
            type="password"
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Button id="new-register" type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>

        </form>
      </main>
    </Container>
  );
}

export default Register;
