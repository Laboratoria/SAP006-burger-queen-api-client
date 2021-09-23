import { useHistory } from 'react-router';
import React, { useState } from 'react';

const MenuHamburger = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const history = useHistory();

  return (
    <nav className='menu-nav'>
      <div className='bar' onClick={() => {
        openNavBar === false ?
          setOpenNavBar(true)
          : setOpenNavBar(false);
      }}>
        <hr className='bar-icon'></hr>
      </div>
      <div className='nav-links'>
        <button className={
          `nav-item ${openNavBar === true ? ' show-item' : ''}`}
          onClick={() => {
            history.push('/orders');
          }}
        >Finalizados
        </button>
        <button className={
          `nav-item ${openNavBar === true ? ' show-item' : ''}`}
          onClick={() => {
            localStorage.removeItem('token');
            history.push('/');
          }}>Logout
        </button>
      </div>
    </nav>
  );
}

export default MenuHamburger;