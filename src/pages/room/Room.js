import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from "../../routes/utils/auth";

export const Room = () => { 
  const history = useHistory();

  const handleLogout = () => {
    logout()
    history.push('/')
  }


  return (
    <div>
      <h1>ROOM</h1>
    <button onClick={handleLogout}>saia</button>
    </div>
    
  )
}

