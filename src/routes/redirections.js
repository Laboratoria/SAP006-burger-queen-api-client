import  { paths } from './paths'

export const getRouteByRole = (role) => {
    switch (role) {
        case 'salão':
            return paths.tables
        case 'cozinha':
            return paths.kitchen
        default: 
            return paths.login
    }   
}
