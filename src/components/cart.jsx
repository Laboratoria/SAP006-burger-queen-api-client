import React from "react";
import ProductInfo from "./productinfo";

export default function Cart({ data }) {
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
            >
            </ProductInfo>
            <p>{elem.qtd}</p>
          </div>)
      })}

    </div>
  )
}