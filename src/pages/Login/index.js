import Button from "../../components/Button/button.js";
import Input from "../../components/inputs/index.js";
import { Link } from "react-router-dom";
import "./style.css";
import logoMagic from "../../img/logoMagic.png";
import useForm from "./useForm.js"
import signInValidation from "./signInValidation.js";


function Login() {

  const {values, handleChange, handleSubmit, errors} = useForm(signInValidation);

  return (
    <form className="container">
      {/* <div className="container"> */}
      <img src={logoMagic} className="logoMagic" alt="logo" />

      <div className="container-login">
        <form className="input-login">
          <Input 
          className="input-email" 
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="text"
          >
          </Input>
          {errors.email && <p class="errorNotice">{errors.email}</p>}
          <Input 
          placeholder="Senha"
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          > 
          </Input>
          {errors.password && <p class="errorNotice">{errors.password}</p>} 
        </form>

        <Button
          btnId="btn-enter"
          btnType="button"
          btnClass="goBtn"
          btnText="Entrar"
          btnOnClick={handleSubmit}
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
