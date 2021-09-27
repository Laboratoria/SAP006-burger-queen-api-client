import React from "react";
import ProductInfo from "./productinfo";

export default function Requests({ data }) {
  return (
    <div>
      {data.map((elem) => {
        return (
          <ProductInfo
            key={elem.id}
            name={elem.name}
            price={elem.price}
            flavor={elem.flavor}

            
          />) 
      })}
       <button>excluir</button>
    </div>
   
  )
}