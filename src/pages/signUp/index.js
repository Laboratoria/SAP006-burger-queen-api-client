import  Input  from '../../components/inputs/index.js';
import Button from '../../components/Button/button.js';
import '../signUp/style.css';
import logoMagic from "../../img/logoMagic.png";
import { signUpWithEmailAndPassword } from '../../services/register.js';

const signUp = () => {
    function handleClick(e) {
      e.preventDefault()
      signUpWithEmailAndPassword("Thais","thais4444444444@hotmail.com", "123456", "Atendente")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error)
      })
    };
    return (
    <main>
    <img alt="" src={logoMagic}></img>
    <form className="form">
      <h1>Bem Vindo!</h1>
      <section className="form-input"> 
      <Input placeholder="Nome"></Input>
      <Input placeholder="Email"></Input>
      <Input placeholder="Senha"></Input>
      </section>
      <hr width="150px"></hr>
      <p>Selecione seu cargo:</p>
      <label><input type="radio" name="workingOptions" value="Atendente"></input>Atendente</label>
      <label><input type="radio" name="workingOptions" value="Cozinheiro(a)"></input>Cozinheiro(a)</label>
      <Button btnClass="createAccount" btnText="Cadastrar" btnOnClick={handleClick} />
    </form>
    </main>
    );
}

export default signUp;