import { tokenUser } from '../services/users'

export const isAuthenticated = () => {

  // const token = !!localStorage.getItem('token');
  if (tokenUser) {
    return true;
  } else {
    return false;
  }
};