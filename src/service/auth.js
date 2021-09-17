const authUser = () => {
  const token = localStorage.getItem('token');

  if (token !== null && token !== 'undefined') {
    return true;
  }
  return false;
};

export default authUser;
