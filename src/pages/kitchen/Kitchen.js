import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from "../../routes/utils/auth";


export const Kitchen = () => { 
  const history = useHistory();

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <div>
      <h1>kitchen</h1>
    <button onClick={handleLogout}>saia</button>
    </div>
    
  )
}
