import Button from "../../components/Button/button.js";
import Input from "../../components/inputs/index.js";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form>
      <form className="input-login">
        <Input placeholder="Email"></Input>
        <Input placeholder="Senha"></Input>
      </form>
      <div className="btn-container">
        <Button
          btnId="btn-enter"
          btnType="button"
          btnClass="goBtn"
          btnText="Entrar"
        />
        <p className="new-worker">É um novo funcionário?</p>
        <Link to="/register">
          <Button
            btnId="btn-register"
            btnType="button"
            btnClass="goBtn"
            btnText="Cadastre-se"
          />
        </Link>
      </div>
    </form>
  );
}

export default Login;
