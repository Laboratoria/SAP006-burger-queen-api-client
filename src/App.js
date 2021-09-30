import React from "react"
import Input from "./componentes/input"
import Button from "./componentes/button"
function App() {
  return (
    <div className="App">
      <Input type="radio" />
      <Input type="radio" />
      <Input type="text" placeholder="Insira aqui o seu nome" />
      <Input type="text" placeholder="Insira aqui o seu email" />
      <Input type="password" placeholder="Insira aqui a sua senha" />
      <Button type="submit"> Enviar </Button>

    </div>
  );
}

export default App;
