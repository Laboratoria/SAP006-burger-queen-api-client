import React from 'react';
import CartItem from './CartItem';
import Button from '../button/Button';
import './Style.css';

export default function CartArea({ arrItem, removeButton, addButton }) {
  return (
    <section className="container-cart">
      <div className="cart">
        <p className="info-card text-cart">🛒 Carrinho </p>
          {arrItem.map((item) => {
            return (
              <CartItem
                key={item.id}  
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                remove={removeButton}
                add={addButton}
                qtd={item.qtd}
              />)
          })}
      </div>
      <div>
          total R$
      </div>

      <Button
        text="Fazer Pedido"
        className="buttons btn-request" 
      />
    </section> 
  )
}


// const DataClient = ({ data, setData, error }) => {
//   return (
//     <>
//       <h2>Carrinho</h2>
//       {error !== '' ? (
//         <div data-testid="error" className="error">
//           {error}
//         </div>
//       ) : (
//         ''
//       )}
//       <div className="content-label">
//         <Label htmlFor="client-name" labelInfo="label-name">
//           Nome do Cliente e mesa:{' '}
//         </Label>
//         <Input
//           type="text"
//           placeholder="Mariazinha"
//           name="client-name"
//           className="client-name-input"
//           id="clients"
//           onChange={(e) => setData({ ...data, client: e.target.value })}
//           value={data.client}
//         />
//       </div>
//       <Input
//         type="number"
//         placeholder="1 a 10"
//         name="client-table"
//         className="client-name-input"
//         id="table"
//         onChange={(e) => setData({ ...data, table: e.target.value })}
//         value={data.table}
//       />
//     </>
//   );
// };

// export default DataClient;