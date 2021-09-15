import React from "react";
import Routes from "./Routes";
import Header from "./Components/Header";
import Input from "./Components/Input";

function App() {
  
  
  return (
      <div className="App">
        <Routes />
        <Header />
        <Input />
      </div>

    );
}

export default App;


// const [valor, setValor] = useState(0);

//   function funcAumentar(){
//     setValor(valor + 1);

//   }

//   function funcDiminuir(){
//     setValor(valor - 1);
//   }

{/* <div>Quantidade de produto no carrinho: <b>{ valor }</b></div>
      <button onClick={funcAumentar}>Adicionar + 1 no carrinho</button>
      <button onClick={funcDiminuir}>Remover - 1 no carrinho</button> */}