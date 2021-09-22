import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from "../../routes/utils/auth";

import { NavbarKitchen } from '../../components/Navbar/Navbar';
import { Button } from '../../components/Button/Button';


export const Kitchen = () => { 
  const history = useHistory();

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <div>
      <NavbarKitchen/>
      <Button Role='kitchen-sign-out'/>
    </div>
    
  )
}
