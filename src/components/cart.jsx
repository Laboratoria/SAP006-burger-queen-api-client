import React from "react";
import ProductInfo from "./productinfo";


export default function Cart({ data, onClick, onClickDelete }) {
  return (
    <div className='orders-list'>
      {data.map((elem) => {
        return (
          <div key={elem.id}>
            <ProductInfo
              name={elem.name}
              price={elem.price}
              flavor={elem.flavor}
              complement={elem.complement}
              onClick={()=> onClick(elem) }
              onClickDelete={() => onClickDelete(elem)}
            />
            <p>{elem.qtd}</p>
            
          </div>
          
          )


      })}

    </div>
  )
}