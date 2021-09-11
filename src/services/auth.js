// Não passsar mais de 3 parametros em uma função, netse caso colocar um objeto.
export const registerAnEmployee = (event, {userData}) => {
  const apiToRegister = 'https://lab-api-bq.herokuapp.com/users'
  event.preventDefault();
    if (userData.name.length < 7) {   
      console.log('Por favor, digite um nome válido.')
      return 'name'
    }
    else if (!userData.email.includes('@')) {
      console.log('Por favor, digite um email válido.')
      return 'email'
    }
    else if (userData.password.length < 6) {
      console.log('A senha deve ser composta por no mínimo SEIS caracteres.')
      return 'password'
    }
    else if (userData.password !== userData.confirmPassword) {
      console.log('As senhas não conferem.')
      return 'password'
    } 
    else if (userData.role === '') {
      console.log('Por favor, selecione uma função.')
      return 'role'
    }
    else {
      fetch(apiToRegister, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify 
          ({
          name: userData.name,
          email: userData.email,
          password: userData.password,
          role:userData.role,
          restaurant:'Combos Burger'
          })
      }).then((response) => { 
          return response.json()
      }).then((json) => {
        const token = json.token;
        localStorage.setItem('currentEmployeeToken', token)
        if (json.token !== undefined) {
          console.log('Cadastro realizado com sucesso.')
          setTimeout(() => {
            console.log('rota para orders')
          }, 1000) 
        } else {
          throw new Error (json.message)
        }
      }).catch((error) => console.log(error))
    }
}