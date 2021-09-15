import Input from "../../components/inputs/index.js";
import Button from "../../components/Button/button.js";
import "../signUp/style.css";
import logoMagic from "../../img/logoMagic.png";
import ValueAndError from "./formValueAndError.js";
import validateValues from "./ValidateRegister.js";

function alertApears() {
  // alert("clicouuu");
}

export function signUp() {
  const { handleChange, values, handleSubmit, errors } = ValueAndError(validateValues);

  return (
    <main>
      <img alt="" src={logoMagic}></img>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Bem Vindo!</h1>
        <section className="form-input">
          {errors.name && <p>{errors.name}</p>}
          <Input
            name="name"
            type="text"
            placeholder="Nome"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
          />

          {errors.email && <p>{errors.email}</p>}
          <Input
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
          />

          {errors.password && <p>{errors.password}</p>}
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Senha"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
          />
        </section>

        <hr className="line" />
        <p>Selecione seu cargo:</p>
        <label>
          <input type="radio" name="workingOptions" value="atendente" />
          Atendente
        </label>
        <label>
          <input type="radio" name="workingOptions" value="cozinheiro" />
          Cozinheiro(a)
        </label>
        <Button
          btnClass="createAccount"
          btnText="Cadastrar"
          btnOnClick={alertApears}
        />
      </form>
    </main>
  );
}

export default signUp;
