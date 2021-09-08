import React from 'react';
import concha from '../../img/concha.png';

function Page404() {
  return (
    <main className="container flez flex--centro flex--coluna">
      <p className="notFound-text">
        Ops, this page doesnt exist!
      </p>
      <img className="logo-exist" src={concha} alt="logo-concha" />
    </main>

  );
}

export default Page404;
