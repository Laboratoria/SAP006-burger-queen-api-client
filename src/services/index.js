
export const loginRedirection = (role, history) =>{
 
  switch (role) {
    case 'hall':
      history.push('/salao');
      break;
    case 'kitchen':
      history.push('/cozinha');
      break;
    default:
      break;
  }
}


