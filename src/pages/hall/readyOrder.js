import React, { useEffect, useState, useCallback } from 'react'
import '../kitchen/kitchen.css'

export function ReadyOrder() {
  const token = localStorage.getItem('token')
  const [orderStatus, setOrderStatus] = useState([])
  const url = 'https://lab-api-bq.herokuapp.com/orders/'

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(orders => {
        const status = orders.filter(itens => itens.status.includes('ready'))
        setOrderStatus(status)
      })
  }, [token])

  useEffect(() => {
    console.log(orderStatus)
  }, [orderStatus])


  const handleStatus = (id, newStatus, index) => {
    console.log(index)
    const status = { status: newStatus }
    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify(status)
    })
      .then(response => {
        return response.json()
      })
      .then((result) => {
        const listOrder = orderStatus.filter((order)=> order.id !== result.id)    
        setOrderStatus(listOrder)
      })
  }

  return (
    <>
      <div className="hall">
        <section className="menu">
          <h1>Pedidos para entregar</h1>
          <section>
            {orderStatus.map((order, index) => {
              return (
                <section className="menu" key={order.id}>
                  <div className="resume-order">
                    <h1> {order.status.replace('ready', 'Para servir')} </h1>
                    <p>ID: {order.id} </p>
                    <p>Cliente: {order.client_name} </p>
                    <p>Mesa: {order.table} </p>
                    <time>
                      {`${new Date(order.createdAt).toLocaleDateString(
                        'pt-br'
                      )} - ${new Date(order.createdAt).toLocaleTimeString(
                        'pt-br',
                        {
                          hour: '2-digit',
                          minute: '2-digit'
                        }
                      )}h`}
                    </time>
                    <article className="order">
                      {order.Products.map((item, index) => (
                        <div key={index}>
                          <p>                          
                            {item.qtd} {item.name}
                          </p>
                          <p>{item.flavor}</p>
                          <p>{item.complement}</p>
                        </div>
                      ))}
                    </article> 
                     <button
                        className="button"
                        style={{ backgroundColor: 'var(--azul)' }}
                        onClick={() => handleStatus(order.id, 'delivered', index)}
                      >
                        Entregar
                      </button>               
                  </div>
                </section>
              )
            })}
          </section>
        </section>
      </div>
    </>
  )
}

export default ReadyOrder
