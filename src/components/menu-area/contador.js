import { useState } from "react/cjs/react.development";
import Button from "../button/button"

export default function Contador() {
  let [contador, setContador] = useState(1);
  function adicionar() {
    setContador(contador = contador += 1)
  }
  function diminuir() {
    setContador(contador = contador -= 1)

  }
  return (
    <div className='button-qtd'>

      <Button
        buttonType='button'
        buttonOnclick={(e) => diminuir(e)}
        buttonText="-"
        buttonClass='button-area'
      >
      </Button>
      <Button
        buttonType='button'
        buttonOnclick={(e) => adicionar(e)}
        buttonText="+"
        buttonClass='button-area'
      >
      </Button>

      <h2>{contador}</h2>
    </div>
  )
}