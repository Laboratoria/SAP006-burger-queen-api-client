import React from 'react';
import { useHistory } from 'react-router-dom';


import { Button } from '../Button/Button';


import './Navbar.scss';

export function NavbarRoom () {

  const history = useHistory();

  return (
    <div>
      <nav>
        <ul>
          <li> <Button Role='room-navbar-menu' ButtonOnClick = {() => history.push('/menu')}/> </li>
          <li> <Button Role='room-navbar-being-prepared-orders' ButtonOnClick = {() => history.push('/orders/being-prepared')}/> </li>
          <li> <Button Role='room-navbar-ready-orders' ButtonOnClick = {() => history.push('/orders/ready')} /> </li>
          <li> <Button Role='room-navbar-menu-delivered-orders' ButtonOnClick = {() => history.push('/orders/delivered')}/> </li>
        </ul>
      </nav> 
      
    </div>
  )
}



