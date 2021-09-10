import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ButtonLogout(props) {
  const history = useHistory()

	const logout = () => {
    localStorage.clear()
    history.push('/')
	}

	return (
			<button onClick={logout}>Botão provisório logout</button>
	)
};
