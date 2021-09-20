import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/button';
import window from '../../img/window.png';
import './kitchen.css';

function Kitchen() {
  const historylogOut = useHistory();

  const logOut = () => {
    localStorage.removeItem('token');
    historylogOut.push('/');
  };

  return (
    <div className="container-kitchen">
      <h1> Cozinha Krusty Krab </h1>

      <div className="btn-div">
        <Button buttonOnClick={logOut} buttonClass="logOut-btn">
          <img className="window-img" src={window} alt="Janela de navio" />
          <p className="txt-logOut">Sair</p>
        </Button>
      </div>
    </div>
  );
}

export default Kitchen;
