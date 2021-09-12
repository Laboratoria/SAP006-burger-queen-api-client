import  Input  from '../../components/inputs/index.js';
import Button from '../../components/Button/button.js';
import '../signUp/style.css';

function alertApears() {
  alert("clicouuu");
}

const signUp = () => {
    return (
    <main>
      <div className="form">
    <form className="form-input">  
      <h1>Bem Vindo!</h1> 
      <Input placeholder="Nome"></Input>
      <Input placeholder="Email"></Input>
      <Input placeholder="Senha"></Input>
      <hr width="150px"></hr>
      <p>Selecione seu cargo:</p>
      <label><input type="radio" name="workingOptions" value="Atendente"></input>Atendente</label>
      <label><input type="radio" name="workingOptions" value="Cozinheiro(a)"></input>Cozinheiro(a)</label>
      <Button btnText="Cadastrar" btnOnClick={alertApears} />
    </form>
      </div>
    </main>
    );
}

export default signUp;