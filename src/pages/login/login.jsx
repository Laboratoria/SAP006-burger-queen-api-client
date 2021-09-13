const Login = (props) => {
  return (
    <div>
      <h1>Página de Login</h1>
      <button onClick={() => {
        console.log('ok');
        props.history.push('/menu');
      }}>Logar
      </button>
    </div>
  );
}

export default Login;