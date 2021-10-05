import React from "react";
import notfound from "../../src/img/notlogo.png";
import "../pages/notfound/notfound.css";

const NotLogo = () => {  
  return (
      <header className="not-logo">
            <img 
                className="responsive center" 
                src={notfound} 
                alt="not found logo " 
            />
      </header>
  )
}

export default NotLogo;