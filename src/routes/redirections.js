import  { paths } from './paths'

export const getRouteByRole = (role) => {
    switch (role) {
        case 'salão':
            return paths.menu
        case 'cozinha':
            return paths.kitchen
        default: 
            return paths.login
    }   
}

export const getRouteHeaderMenu = (path) => {
    switch(path) {
        case 'cardápio':
            return paths.menu
        case 'status dos pedidos':
            return paths.ordersStatus
        default:
            return console.log("Desculpe, não conseguimos te redirecionar")
    }
}
