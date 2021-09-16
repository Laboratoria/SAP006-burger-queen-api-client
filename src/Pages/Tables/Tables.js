import React from 'react';

import { useParams } from 'react-router-dom';
 
function User(){
    const { name } = useParams();
    return (
        <div>
            <h1>Logado como { name }</h1>
        </div>
    )   
}
export default User;