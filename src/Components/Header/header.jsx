
/* eslint-disable*/
import React from "react";
import { useHistory } from "react-router-dom";
//import Button from "../../Components/Button/button";
import Konoha from '../../img/konoha.png';

import "./header.css";


function Header() {
  const history = useHistory();  // é o metodo do react, ele redireciona  pra uma pag e  é colocado dentro de  uma variavel , o push é o caminho que ele vai levar tudo dentro de uma função que vai ser usada num button no caso  é a função orders deliverd, que chama o history , push e endereço
 const ordersDone= () => {
  //  history.push('/orders-done');
  };
 
  const ordersDelivered = () => {
  //  history.push('/orders-delivered');
  };
      const goSalon = () => {
    //  history.push('/salon');
      }
   
   return (
    <>
      <header>
       <div className= "konoha-menu">
       <img className="logo-header" src={Konoha} alt="Logo Konoha Burguer" />
       <img className="logo-header" src={Konoha} alt="Logo Konoha Burguer" />
       </div>
       
      </header>
    </>
  );
}
export default Header;