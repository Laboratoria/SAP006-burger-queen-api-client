import React from "react";
import Salao from "../../src/img/salao.png";
import "../pages/cadastro/cadastro.js";


const SalaoIcon = () => {
  return(
      <img 
            className="iconSalao" 
            src={Salao} 
            alt="Ícone garçom" 
        />
  )
}

export default SalaoIcon;