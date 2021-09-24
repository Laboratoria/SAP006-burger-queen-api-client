import React from 'react'
import GeneralButton from '../Button/Button';
import './style.scss';

const OrdersList = () => {
    
    return (
        <section className="section-ordersList">
            <article className="text-ordersList">
                <h3>Pedidos</h3>
                <h3>Mesa</h3>
            </article>

            <article className="text-ordersList">
                <h4>nome.produto</h4>
                <p>-</p>
                <p>1</p>
                <p>+</p>
                <p>preço.produto</p>
            </article>

            <article className="text-ordersList">
                <GeneralButton className="btn-confirmOrder">
                    Confirmar pedido
                </GeneralButton>
                <p>Total preço</p>
            </article>
            
        </section>
    )
}

export default OrdersList;