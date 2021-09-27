import React from 'react'
import { SelectedItem } from './ItemCard';
import './style.scss';

const OrdersList = ({ data }) => {
    
    return (
        <article className="text-ordersList">
            {data.map((item) => {
                return (
                    // const order = () => {
                        <SelectedItem
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            flavor={item.flavor}
                            complement={item.complement}
                            qtd={item.qtd}    
                        />
                    // }
                    // return order
                )
            })}
        </article>  
    )
}

export default OrdersList;