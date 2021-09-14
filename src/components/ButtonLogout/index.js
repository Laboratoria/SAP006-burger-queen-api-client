/* eslint-disable react/prop-types */ 

import React from 'react';
import { useHistory } from 'react-router-dom';
import logoutBtn from '../../img/logout.png'
import './buttonLogout.scss';

export default function ButtonLogout( {className} ) {
  const history = useHistory()

	const logout = () => {
    localStorage.clear()
    history.push('/')
	}

	return (
			<button onClick={logout} className={className}>
				<img src={logoutBtn} alt="logout"/>
			</button>
	)
};
