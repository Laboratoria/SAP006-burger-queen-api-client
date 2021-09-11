import  Input  from '../../components/inputs/index.js';
import '../signUp/style.css';

const signUp = () => {
    return (
    <main>
    <form className="form-input">   
      <Input placeholder="Nome"></Input>
      <Input placeholder="Email"></Input>
      <Input placeholder="Senha"></Input>
    </form>
    </main>
    );
}

export default signUp;