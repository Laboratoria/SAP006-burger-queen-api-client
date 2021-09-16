const authUser = () => {
  const token = localStorage.getItem('token');

  if (token !== null && token !== 'undefined') {
    return true;
  }
  return false;
};

const role = () => localStorage.getItem('role');

const token = () => localStorage.getItem('token');

export default { authUser, role, token };
