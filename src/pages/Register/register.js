import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/button';
import InputTxt from '../../components/Input/inputTxt';
import Select from '../../components/Select/select';
import Jellyfish from '../../img/jellyfish.png';
import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const postCad = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      console.log('ruim');
    } else {
      fetch('https://lab-api-bq.herokuapp.com/users/', {
        method: 'POST',
        headers: {
          // eslint-disable-next-line quote-props
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${email}&password=${password}&role=${role}&restaurant=The Krust Krab&name=${name}`,
      })
        .then((response) => response.json())
        .then((json) => {
          // eslint-disable-next-line no-empty
          if (json.id === undefined) {
          } else {
            console.log('cadastrado');
          }
        });
    }
  };

  return (
    <main className="ocean-container">
      <div className="register-container">
        <form className="register-form">
          <h1 className="txt-register"> cadastre-se</h1>

          <InputTxt
            inputType="text"
            inputPlaceholder="Digite seu nome"
            inputValue={name}
            inputOnChange={(event) => setName(event.target.value)}
            inputClassName="input-register"
          />

          <InputTxt
            inputType="text"
            inputPlaceholder="Digite seu E-mail"
            inputValue={email}
            inputOnChange={(event) => setEmail(event.target.value)}
            inputClassName="input-register"
          />

          <InputTxt
            inputType="password"
            inputPlaceholder="Crie uma senha"
            inputValue={password}
            inputOnChange={(event) => setPassword(event.target.value)}
            inputClassName="input-register"
          />

          <Select
            selectName="ordenar"
            selectValue={role}
            selectOnChange={(event) => setRole(event.target.value)}
            selectClassName="register-option"
            optionValue1=""
            optionValue2="salao"
            optionValue3="cozinha"
            optionText1="Cargo"
            optionText2="Garçom/Garçonete"
            optionText3="Cozinheiro(a)"
            optionClassName="input-option-select"
            optionDisabled
          />

          <Button
            buttonOnClick={(e) => postCad(e)}
            buttonText="Cadastrar"
            btnClassName="btnForm"
          />
        </form>
      </div>
      <div className="Jelly-div">
        <Link to="/">
          <img className="jellyfish" src={Jellyfish} alt="jellyfish-btn" />
          <div className="secret-text">Voltar</div>
        </Link>
      </div>

    </main>

  );
}

export default Register;
