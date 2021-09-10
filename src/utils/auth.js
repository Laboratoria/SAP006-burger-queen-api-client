
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if(token!==null && token!== "undefined"){
    return true
  }
    return false
}

export const role = () => localStorage.getItem('role');

export const token = () => localStorage.getItem('token');
