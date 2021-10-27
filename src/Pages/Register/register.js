/* eslint-disable*/
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../Components/Button/button";
import InputText from "../../Components/input/input";
import Select from "../../Components/Select/select";
import "./register.css";

//import Img from "../../img/background.jpeg";

function Register() {
  const [verifyInput, setVerifyInput] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState(false);
  const routeHistory = useHistory();
  const routerRegister = () => {
    routeHistory.push("/ ");
  };
 // const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [name, setName] = useState("");
  const passwordRegis = (e) => {
    //  alert("foi");
    e.preventDefault();
    if (
      userEmail === " " ||
      userPassword === " " ||
      name === " " ||
      userRole === ""
    ) {
      setVerifyInput(true);
    }
    if (userPassword.length < 6) {
      setVerifyPassword(true);
    } else {
      fetch("https://lab-api-bq.herokuapp.com/users/", {
        method: "POST", //criar uma nova entrada de usuario
        headers: {
          // eslint-disable-next-line quote-props
         "accept" : "application/json",

          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${userEmail}&passaword=${userPassword}&role=${userRole}&restaurant=konoha hamburguer&name=${name}  `,
      })
        .then((response) => response.json())
        console.log(response.json);
        .then((json) => {
          if (json.id === undefined) {
            console.log("não entrou");
            console.log(json.id);
          } else {
            //  routerRegister();
            console.log("entrar");
          }
          // console.log("foi");
        });
    }

    //console.log("cadastrar user")
  };

  return (
    <>
      <section className="container">
        <div className="register-container">
          <form className="container-form">
            <h1 className="text-form">Cadastro</h1>

            <InputText
              InputType="text"
              inputPlaceholder=" Digite seu Nome"
              inputValue={name}
              inputOnChange={(event) => setName(event.target.value)}
              inputClassName="input-form"
            />

            <InputText
              inputType="text"
              inputPlaceholder=" Digite seu Email"
              inputValue={userEmail}
              inputOnChange={(event) => setUserEmail(event.target.value)}
              inputClassName="input-form"
            />

            <InputText
              InputType="password"
              inputPlaceholder=" Senha"
              inputValue={userPassword}
              inputOnChange={(event) => setUserPassword(event.target.value)}
              inputClassName="input-form"
            />
            <Select
              selectName="order"
              selectValue={userRole}
              selectOnChange={(event) => setUserRole(event.target.value)}
              selectClassName="form-option"
              optionValue1=""
              optionValue2="salao"
              optionValue3="cozinha"
              optionText1="Cargo"
              optionText2="Garçom"
              optionText3="Cozinheiro"
              optionClassName="input-form-select"
              optionDisabled
            />
            <Button
              buttonOnClick={(e) => passwordRegis(e)}
              buttonClass="btn-form"
            >
              cadastrar
            </Button>
            {verifyPassword ? (
              <div className="erro">
                <h2>preencha a senha com seis digitos</h2>
              </div>
            ) : null}
            {verifyInput ? (
              <div className="erro">
                <h2>preencha o campo corretamente</h2>
              </div>
            ) : null}
            {verifyInput ? (
              <div className="erro">
                <h2>Preecha todos os campos</h2>
              </div>
            ) : null}
          </form>
        </div>
      </section>
      <Link to="/"></Link>
    </>
  );
}

export default Register;
