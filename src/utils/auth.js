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




   

