export const checkUserDataToSignin = ({userData}, {setAuthInputs}) => {
  if (userData.name.length < 7) {   
    setAuthInputs.setNameErrorInput(true);
    return 'Error'
  }
  else if (!userData.email.includes('@')) {
    setAuthInputs.setEmailErrorInput(true);
    return 'Error'
  }
  else if (userData.password.length < 6) {
    setAuthInputs.setPasswordErrorInput(true);
    setAuthInputs.setConfirmPasswordErrorInput(true);
    return 'Error'
  }
  else if (userData.password !== userData.confirmPassword) {
    setAuthInputs.setPasswordErrorInput(true);
    setAuthInputs.setConfirmPasswordErrorInput(true);
    return 'Error'
  } 
  else if (userData.role === '') {
    setAuthInputs.setRoleErrorInput(true);
    return 'Error'
  } else {
    return 'Sucess'
  }
}

export const authSignin = (event, {userData}, {setAuthModals}, {setAuthInputs}) => {
  const apiToSignin = 'https://lab-api-bq.herokuapp.com/users'
  event.preventDefault();

  const userDataCheckResult = checkUserDataToSignin ({userData}, {setAuthInputs})
  if (userDataCheckResult === 'Sucess') {
    fetch(apiToSignin , {
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
      return response.json();
    }).then((json) => {
      const token = json.token;
      localStorage.setItem('currentEmployeeToken', token);
      if (json.token !== undefined) {
        setAuthModals.setAuthSucessModal(true)
      } else {
        throw new Error (json.message);
      }
    }).catch(() => {
      setAuthModals.setAuthErrorModal(true)
    })
  }


  };

export const authLogin = (event, {userData}, {setAuthModals}) => {
  const apiToLogin = 'https://lab-api-bq.herokuapp.com/auth';
  event.preventDefault();
  fetch (apiToLogin, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password
      })
  }).then((response) => {
    if (response.status === 200) {
        return response.json();
    } else {
      throw new Error(response.status);
    }
  }).then((responseJson) => {
    localStorage.setItem('currentEmployeeToken', responseJson.token);
    if (responseJson.token !== undefined) {
      setAuthModals.setAuthSucessModal(true);
    }
  }).catch(() => {
      setAuthModals.setAuthErrorModal(true);
  })
};

export const showOrNotShowPassword = (event, value, setValue) => {
  event.preventDefault();
  setValue(value ? false : true);
};