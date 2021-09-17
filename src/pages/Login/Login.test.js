// /* eslint-disable no-undef */
// import React from 'react';
// import {
//   render, screen, fireEvent,
// } from '@testing-library/react';
// import Login from './login';

// // test('renders learn react link', () => {
// //   render(<Login />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// describe('Initial Component', () => {
//   describe('When the login page is displayed', () => {
//     it('restaurant name is displayed', () => {
//       render(<Login />);
//       expect(screen.getByText('The Krusty Krab')).toBeInTheDocument();
//     });
//     it('login button is displayed', () => {
//       render(<Login />);
//       expect(screen.getByText('Login')).toBeInTheDocument();
//     });
//     it('password is requested', () => {
//       render(<Login />);
//       expect(screen.getByText('Senha')).toBeInTheDocument();
//     });
//   });
// });

// describe('quando realizo um login', () => {
//   it('se estiver correto, permite logar para uma outra pagina', () => {
//     const user = {
//       email: 'teste@teste.com',
//       senha: '123456',
//     };

//     const userOk = loginBtn(user);

//     expect(userOk).toBe(ok);
//   });
//   it('login com senha e usuário', () => {
//     render(<Login />);

//     const email = screen.getByTestId('emailTest');
//     const password = screen.getByTestId('passwordTest');
//     const btnLogin = screen.getByText('Login');

//     expect(userOk).toBe(ok);

//     fireEvent.change(email, { target: { value: 'teste@mail.com' } });
//     fireEvent.change(password, { taget: { value: '123456' } });
//     fireEvent.click(btnLogin);

//     expect(goToSaloon).toBe('/salao');
//   });
// });
