     
          import React from 'react';
import { useHistory } from 'react-router-dom';


import { logout } from "../../routes/utils/auth";
import { NavbarRoom } from '../../components/Navbar/Navbar';

import { Button } from '../../components/Button/Button';


export const Menu = () => { 
  const history = useHistory();

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <div>
    <NavbarRoom/>
    <h1>MENU</h1>
    </div>
    
    )
  }








    


