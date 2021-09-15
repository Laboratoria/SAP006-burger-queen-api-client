import React from 'react';
import { Link } from 'react-router-dom';
import Bob from '../../img/bob.gif';
import Jellyfish from '../../img/jellyfish.png';
import './notFound.css';

function Page404() {
  return (
    <main className="container-404">
      <div className="not-found">
        <h1 className="notFound-text">
          Ops!!
        </h1>
        <h1 className="notFound-text">
          Esta página existe apenas na sua imaginação!
        </h1>
      </div>
      <img className="bob-gif" src={Bob} alt="Spongebob-imagination" />
      <div className="Jelly-div-404">
        <Link to="/">
          <img className="jellyfish-img" src={Jellyfish} alt="jellyfish" />
          <div className="secret-text">Voltar</div>
        </Link>
      </div>
    </main>

  );
}

export default Page404;
