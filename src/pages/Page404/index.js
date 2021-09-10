import React from 'react';
import Bob from '../../img/bob.gif';
import './notFound.css';

function Page404() {
  return (
    <main className="container-404">
      <h1 className="notFound-text">
        Ops, Esta página existe apenas na sua imaginação!
      </h1>

      <img className="bob-gif" src={Bob} alt="Spongebob-imagination" />
    </main>

  );
}

export default Page404;
