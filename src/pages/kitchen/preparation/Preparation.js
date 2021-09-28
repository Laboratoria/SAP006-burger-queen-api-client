import React from 'react';
import { useHistory } from 'react-router-dom';

import NavBar from '../../../components/navbar/Navbar'
import Button from '../../../components/button/Button';

import './Preparation.css';

function Preparation () {
    const history = useHistory();
    
    const btnPreparation = (e) => {
        e.preventDefault()
        history.push('/preparacao')
      }

      const btnReady = (e) => {
        e.preventDefault()
        history.push('/prontos')
      }

    return(
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Button 
                    label="Preparação" 
                    type="submit"
                    onClick={btnPreparation} 
                /> 
                <Button 
                    label="Prontos" 
                    type="submit"
                    onClick={btnReady} 
                /> 
              </div>
            <p>EM CONSTRUÇÃO - PREPARAÇÃO COZINHA</p>
        </div>  
    )
};
export default Preparation;