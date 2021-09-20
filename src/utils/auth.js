import React from "react";
//import { history } from '../routes/history'

const STORAGE_KEY = 'HamburgueriaJesus'

export const isLogged = () => !!localStorage.getItem(STORAGE_KEY)

export const login = token => { //Aqui terei de chamar a função com os parametros infoUser
    localStorage.setItem(STORAGE_KEY, token)
}

export const logout = () => {
    localStorage.clear()      
}  

export const registerUser = async (email, password) => {
    const url = 'lab-api-bq.herokuapp.com/users';
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            role: 'atend',
            restaurant: 'HamburgueriaJesus'
        }),
    });
    const response = await resp.json();
    return response;
};