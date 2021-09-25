import React from "react";
import ProductInfo from "./productinfo";

export default function Cart({ data }) {
  return (
    <div>
      {data.map((elem) => {
        return (
          <ProductInfo
            key={elem.id}
            name={elem.name}
            price={elem.price}
            flavor={elem.flavor}
            complement={elem.complement}
          />)
      })}
    </div>
  )
}