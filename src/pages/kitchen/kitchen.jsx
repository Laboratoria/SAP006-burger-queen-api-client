import { useHistory } from "react-router";

const Kitchen = () => {
  const history = useHistory();
	return (
		<div>
			<h1 className='test'>Página de pedidos enviados para a cozinha</h1>
      <button className='form-button draw' onClick={() => {
        localStorage.removeItem('token')
        history.push('/')
      }}>LogOut
      </button>
		</div>
	);
}

export default Kitchen;