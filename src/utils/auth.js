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

export const registerUser = async (emailUser, passwordUser) => {
    const url = 'https://lab-api-bq.herokuapp.com/users';
    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
            email: emailUser,
            password: passwordUser,
            role: 'atend',
            restaurant: 'HamburgueriaJesus'
        }),
    });
};