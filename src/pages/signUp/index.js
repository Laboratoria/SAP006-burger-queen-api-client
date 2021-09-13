import  Input  from '../../components/inputs/index.js';
import Button from '../../components/Button/button.js';
import '../signUp/style.css';

function alertApears() {
  alert("clicouuu");
}

const signUp = () => {
    return (
    <main>
    <form className="form">  
      <h1 style={{textAlign:"center"}}>Bem Vindo!</h1>
      <section className="form-input"> 
      <Input placeholder="Nome"></Input>
      <Input placeholder="Email"></Input>
      <Input placeholder="Senha"></Input>
      </section>
      <hr width="150px"></hr>
      <p>Selecione seu cargo:</p>
      <label><input type="radio" name="workingOptions" value="Atendente"></input>Atendente</label>
      <label><input type="radio" name="workingOptions" value="Cozinheiro(a)"></input>Cozinheiro(a)</label>
      <Button btnClass="registerBtn" btnText="Cadastrar" btnOnClick={alertApears} />
    </form>
    </main>
    );
}

export default signUp;