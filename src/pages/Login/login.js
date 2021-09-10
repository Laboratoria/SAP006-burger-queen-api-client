import Button from '../../components/button.js';

function Login() {
  return (
    <form>
      {/* input email e senha */}
      <div className="btn-container">
        <Button
          btnId="btn-enter"
          btnType="button"
          btnClass="goBtn"
          btnText="Entrar"
        />
        <p className="new-worker">É um novo funcionário?</p>
        <Button
          btnId="btn-register"
          btnType="button"
          btnClass="goBtn"
          btnText="Cadastre-se"
        />
      </div>
    </form>
  );
}

export default Login;
