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
  const { handleChange, values, handleSubmit, errors } =
    ValueAndError(validateValues);

  return (
    <main>
      <img alt="" src={logoMagic}></img>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Bem Vindo!</h1>
        <section className="form-input">
          <fieldset className="margin-input">
            <Input
              name="name"
              type="text"
              placeholder="Nome"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </fieldset>

          <fieldset className="margin-input">
            <Input
              name="email"
              id="email"
              type="text"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </fieldset>

          <fieldset className="margin-input">
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Senha"
              value={values.password} //{errors.password ? errors.password : values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </fieldset>
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
