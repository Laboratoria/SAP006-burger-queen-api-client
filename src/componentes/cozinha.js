import React from "react";
import Cozinha from "../../src/img/cozinha.png";
import "../pages/cadastro/cadastro.js";


const CozinhaId = () => {
  return(
      <img 
            className="iconCozinha" 
            src={Cozinha} 
            alt="Ícone Chef" 
        />
  )
}

export default CozinhaId;