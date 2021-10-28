import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import logoMonsterPeq from '../../img/logoMonsterPeq.png'
import notification from '../../img/notification.png'
import orderIcon from '../../img/orderIcon.png'
import logout from '../../img/logout.png'
import '../hall/hall.css'
import '../kitchen/kitchen.css'

export function Kitchen() {
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
        const ordersPending = orders.filter(itens =>
          itens.status.includes('pending')
        )
        setOrderStatus(ordersPending)
      })
  }, [token])

  const history = useHistory()
  const handleSignOut = e => {
    e.preventDefault()
    history.push('/login')
    localStorage.clear()
  }

  const setStatus = (id, newStatus) => {
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
      .then(result => {
        const listOrder = orderStatus.filter(order => order.id !== result.id)
        setOrderStatus(listOrder)
      })
  }

  return (
    <div className="hall">
      <section className="menu-title">
        <h1 className="menu-kitchen">Pedidos</h1>
      </section>
        <section className="container-kitchen">
          <section className="menu-side">
            <button className="logo-small">
              <img className="logo-small" src={logoMonsterPeq} />
            </button>
            <button className="logo-notification">
              <img className="logo-notification" src={notification} />
            </button>
            <button className="logo-order">
              <img className="logo-order" src={orderIcon} />
            </button>
            <button className="logo-logout" onClick={handleSignOut} >
              <img className="logo-logout" src={logout} />
            </button>
          </section>
          <section className="container-orders">
            {orderStatus.map(order => {
              return (
                <section className="box-order" key={order.id}>
                  <div className="resume-order">
                    <h1>
                      {order.status
                        .replace('pending', 'Pendente')
                        .replace('preparing', 'Em andamento')
                        .replace('done', 'Pronto')}
                    </h1>
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
                      {order.Products.map((items, index) => (
                        <div key={index}>
                          <p>
                            {items.qtd} {items.name}
                          </p>
                        </div>
                      ))}
                    </article>
                    <section className="btn-status">
                      <button
                        className="btn-kitchen"
                        style={{ backgroundColor: 'var(--azul)' }}
                        onClick={() => setStatus(order.id, 'ready')}
                      >
                        Pronto
                      </button>
                    </section>
                  </div>
                </section>
              )
            })}
          </section>
        </section>
    </div>
  )
}

export default Kitchen
