// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Login from './index';
// import api from './api';

// jest.mock('.api');

// describe('request to API', () => {
//   it('exibir lista através da API', async () => {
//     api.menuList.mockResolvedValue([
//       {
//         item: 0,
//         valor: '5',
//         name: 'pingado',
//         id: 1,
//       },
//       {
//         item: 3,
//         valor: '10',
//         name: 'lanchos',
//         id: 3,
//       },
//     ]);

//     render(<Login />);

//     expect(await screen.findByTestId('pedido')).toBeInTheDocument();

//     expect(screen.getByTestId('login').children.length).toBe(2);
//   });
//   it('Chama funçao de buscar menu, quando botao é acionado', () => {
//     const funcaoBuscarMenu = jest.fn();

//     render('<Menu chamar pagina e funcao funcao1={funcao2} />');

//     fireEvent.click(screen.getByText('cafe da manha'));

//     expect(funcao2).toHaveBeenCalled();
//   });
// });
