import React,{useState, useEffect} from "react"
import Input from "./componentes/input"
import Button from "./componentes/button"
function App() {
const [values,setValues]= useState({
  name:"",
  email:"",
  password:"",
  role:"",
  restaurant: "Chilli Burger",
})


const [error, setError] = useState({
  name:"",
  email:"",
  password:"",
  role:"",
  restaurant:"",
})

const validation = () => {
  let error = {}
  if (!values.name) {
    error.name = "Insira o nome corretamente"
  }
  if (!values.email) {
    error.email = "Insira o email corretamente"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = 'Preencha seu e-mail corretamente'
  } 
  if (!values.password) {
    error.password = "Insira a senha corretamente"
  } else if  (values.password.length < 6) {
    error.password = "Insira a senha de 6 digitos"
  }
  if (values.role !== "Atendente" && values.role !== "Cozinha") {
    error.role = "Insira a sua função"
  }
  return error
}
const handleSubmit = e=> {
  e.preventDefault()
  setError(validation()) 
}


useEffect(()=>{
  console.log(values)
},[values])
const handleChange = e => {
  const {name,value}=e.target
  console.log(e.target.name)
  setValues({
  ...values,
[name]:value
  })
}
  return (
    <div className="App">
      <form onSubmit = {handleSubmit}>
      <Input type="radio" onChange={handleChange} value="Atendente" name="role" id="Atendente"/>
      <Input type="radio" onChange={handleChange} value="Cozinha" name="role" id="Cozinha"/>
      <div className = "hidden"> {error.role && <p>{error.role}</p>} </div>
      <Input type="text" placeholder="Insira aqui o seu nome" onChange={handleChange} value={values.name} name="name"/>
      <div className = "hidden"> {error.name && <p>{error.name}</p>} </div>
      <Input type="text" placeholder="Insira aqui o seu email" onChange={handleChange} value={values.email} name="email"/>
      <div className = "hidden"> {error.email && <p>{error.email}</p>} </div>
      <Input type="password" placeholder="Insira aqui a sua senha" onChange={handleChange} value={values.password} name="password"/>
      <div className = "hidden"> {error.password && <p>{error.password}</p>} </div>
      <Button type="submit"> Enviar </Button>
      </form>
    </div>
  );
}

export default App;
