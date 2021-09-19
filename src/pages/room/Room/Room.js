import React from 'react';
import { useHistory } from 'react-router-dom';


import { logout } from "../../../routes/utils/auth";
import { NavbarRoom } from '../../../components/Navbar/Navbar';

import { Button } from '../../../components/Button/Button';


export const Room = () => { 
  const history = useHistory();

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <div className='navbar-div'>
    <NavbarRoom/>
    <Button Role='room-sign-out' ButtonOnClick={handleLogout}/> 
    </div>
    
  )
}

