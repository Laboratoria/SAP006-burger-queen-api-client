import { useHistory } from "react-router";

const Kitchen = () => {
  const history = useHistory();
  return (
    <div className='main'>
      <h1>Cozinha</h1>
      <button className='form-button draw' onClick={() => {
        localStorage.removeItem('token')
        history.push('/')
      }}>LogOut
      </button>
    </div>
  );
}

export default Kitchen;