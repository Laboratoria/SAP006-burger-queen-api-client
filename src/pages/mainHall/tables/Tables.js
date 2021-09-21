import React from 'react';
import LogoImg from '../../../components/images/LogoImg';
import ButtonLogout from '../../../components/button/ButtonLogout';

import './Tables.css';


function Mesas () {
    return(
        <div>
            <LogoImg />
            <ButtonLogout />
        </div>
        
    )
}

export default Mesas;



// import { useParams } from 'react-router-dom';
 
// function User(){
//     const { name } = useParams();
//     return (
//         <div>
//             <h1>Logado como { name }</h1>
//         </div>
//     )   
// }
// export default User;

/* export default function User(){
    const { name } = useParams();
    return (
        <div>
            <h1>Logado como { name }</h1>
        </div>
    )   
} */
