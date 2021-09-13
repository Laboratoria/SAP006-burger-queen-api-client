import Button from "../../components/Button/button.js";
import Input from "../../components/inputs/index.js";
import { Link } from "react-router-dom";
import "./style.css";
import logoMagic from "../../img/logoMagic.png";

function Login() {
  return (
    <form className="container">
      {/* <div className="container"> */}
      <img src={logoMagic} className="logoMagic" alt="logo" />

      <div className="container-login">
        <form className="input-login">
          <Input className="input-email" placeholder="Email"></Input>
          <Input placeholder="Senha"></Input>
        </form>

        <Button
          btnId="btn-enter"
          btnType="button"
          btnClass="goBtn"
          btnText="Entrar"
        />
        {/* <hr> </hr> */}
        <p className="new-worker">Funcionário novo?</p>
        <Link to="/register">
          <Button
            btnId="btn-register"
            btnType="button"
            btnClass="registerBtn"
            btnText="Cadastre-se"
          />
        </Link>
      </div>
      {/* </div> */}
    </form>
  );
}

export default Login;
