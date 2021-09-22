import React from 'react';
import { useHistory } from 'react-router-dom';


import { Button } from '../Button/Button';

import logo from '../../assets/images/logo-berg.png'

import './Navbar.scss';

export function NavbarRoom () {

  const history = useHistory();

  const employeeName = localStorage.getItem('currentEmployeeName')
  let employeRole = localStorage.getItem('currentEmployeeRole')

  employeRole === 'room' ? employeRole = 'Salão' : employeRole ='Cozinha'
  return (
    <div>
      <nav>
      <section className='employee-information-div'>
          <p>Bem vinde {employeeName} :)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Setor: {employeRole}</p>
        </section>
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

export function NavbarKitchen() {

  const history = useHistory();

  const employeeName = localStorage.getItem('currentEmployeeName')
  let employeRole = localStorage.getItem('currentEmployeeRole')

  employeRole === 'room' ? employeRole = 'Salão' : employeRole ='Cozinha'
  return (
    <div>
      <nav className='navbar-kitchen'>
      <section className='employee-information-div'>
          <p>Bem vinde {employeeName} :)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Setor: {employeRole}</p>
        </section>
        <div className='header-logo-and-title'>
          <img src={logo} alt='Berg Logo' className='logo'/>
          <p>COZINHA</p>
        </div>
        <ul>
          <li> <Button Role='room-navbar-waiting-orders'/> </li>
          <li> <Button Role='room-navbar-being-prepared-orders' ButtonOnClick = {() => history.push('/orders/being-prepared')}/> </li>
          <li> <Button Role='room-navbar-ready-orders' ButtonOnClick = {() => history.push('/orders/ready')} /> </li>
          <li> <Button Role='room-navbar-menu-delivered-orders' ButtonOnClick = {() => history.push('/orders/delivered')}/> </li>
        </ul>
      
      </nav> 
      
    </div>
  )
}
