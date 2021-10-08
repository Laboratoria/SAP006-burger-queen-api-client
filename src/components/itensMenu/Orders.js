import React from 'react';
import Button from '../button/Button';
//import {TotalOrders} from '../../services/Products';
import {ConvertDate, ConvertTime} from '../../services/Products';

import './Style.css';


export default function Orders ( {id, client_name, table, status, createdAt, user_id, 
    updateOrderToProcessing, 
    updateOrderToReady,
    updateOrderToDone} ) { 

    const getOrderCreatedAt = new Date(createdAt);
    const getOrderProcessedAt = new Date(getOrderCreatedAt);
    const getOrderResidual = Math.abs(getOrderProcessedAt) - getOrderCreatedAt;
    const showOrderPrepTime = Math.floor((getOrderResidual / 1000) / 60);
    const timeToGetOrderDone = showOrderPrepTime === 60 ? `${getOrderResidual + 1}: 00` : `${getOrderResidual}:${showOrderPrepTime < 10 ? '0' : `${showOrderPrepTime}`}`;

    return (
        <div className="container-orders">
            <div className="container-status">
                {status === 'pending'
                    && <div className="status pending">Status: Pendente</div>}
                {status === 'processing'
                    && <div className="status processing">Em Preparo</div>}
                {(status === 'ready')
                    && <div className="status ready">Servir</div>}
                {(status === 'done')
                    && <div className="done">Finalizado</div>}

                    <span className="time">📅 Entrada: {ConvertDate(createdAt)} às {ConvertTime(createdAt)}</span>
                    <span className="time">🕓 Tempo de Preparo: <span className="hour">{timeToGetOrderDone}</span></span>
                    <hr></hr>
            </div>
            <div className="container-info-orders">
                <p>#{id} | Mesa {table} | {client_name}</p>
                <p>Atendente: {user_id}</p>
            </div>
            <div className="container-products-order">
                PRODUTOS E QUANTIDADES
            </div>
            <div className="container-btn-status">
                {status === 'pending'
                    && <Button
                    className="btn-status status-pending"
                    type='text'
                    text='Ag. Preparação'
                    onclick={updateOrderToProcessing}
                    />}
                {status === 'processing'
                    && <Button
                    className="btn-status status-processing"
                    type='text'
                    text='Preparando'
                    onclick={updateOrderToReady}
                    />}
                {status === 'ready'
                    && <Button
                    className="btn-status status-ready"
                    type='text'
                    text='Servir'
                    onclick={updateOrderToDone}
                    />}
                {status === 'done'
                    && <p className="btn-status status-done">Pedido finalizado</p>}
            </div>
        </div>
    );
}

//<hr></hr> - faz uma linha na pagina