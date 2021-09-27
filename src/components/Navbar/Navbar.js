import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../Button/Button';

import { logout } from '../../routes/utils/auth';

import './Navbar.scss';

export function NavbarRoom () {
  const location = window.location.pathname;
  const history = useHistory();

  const employeeName = localStorage.getItem('currentEmployeeName');
  let employeRole = localStorage.getItem('currentEmployeeRole');
  employeRole === 'room' ? employeRole = 'Salão' : employeRole ='Cozinha';

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <div>
      <nav>
      <section className='navbar-employee-information-div'>
        <Button ButtonClass='navbar-sign-out'  ButtonOnClick={()=> handleLogout()}/>
        <p>Bem vinde {employeeName} :)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Setor: {employeRole}</p>
      </section>
        <ul>
          {employeRole === 'Salão' ? location === '/room' ? 
            <li> <Button ButtonClass='navbar-button navbar-button-menu' ButtonOnClick = {() => history.push('/menu')}/> </li> :
            <li> <Button ButtonClass='navbar-button navbar-button-home' ButtonOnClick = {  () => history.push('/room')}/> </li> 
            :  
            <li> <Button ButtonClass={location === '/kitchen' ? 'navbar-button navbar-button-home-gray' : 'navbar-button navbar-button-home'} ButtonOnClick = {  () => history.push('/kitchen')}/> </li>
          }
          <li> <Button ButtonClass={location === '/orders/being-prepared' ? 'navbar-button navbar-button-being-prepared-orders-gray' : 'navbar-button navbar-button-being-prepared-orders' }ButtonOnClick = {() => history.push('/orders/being-prepared')}/> </li>
          <li> <Button ButtonClass={location ==='/orders/ready' ? 'navbar-button navbar-button-ready-orders-gray' : 'navbar-button navbar-button-ready-orders'} ButtonOnClick = {() => history.push('/orders/ready')} /> </li>
          <li> <Button ButtonClass={location === '/orders/delivered' ? 'navbar-button navbar-button-delivered-orders-gray' : 'navbar-button navbar-button-delivered-orders'} ButtonOnClick = {() => history.push('/orders/delivered')}/> </li>
        </ul> 
      </nav> 
    </div>
  )
}

