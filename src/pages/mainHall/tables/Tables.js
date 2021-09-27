import React from 'react';
// import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom';

import NavBar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer';

import balcao from '../../../img/balcao.png'
import mesas from '../../../img/mesas.png'
import sofa from '../../../img/sofa.png'

import './Tables.css';


function Tables () {
    const history = useHistory();
    // const [values, setValues] = useState({
    //     table: '',
    //     nameClientInput: '',
    // })

    function handleClickMenu (e) {
        e.preventDefault()
        history.push('/menus')
    }

    return(
        <div>
            <div>
                <NavBar />
                <h3 className="infosUser"> Atendente: {localStorage.getItem("userName")} </h3>
            </div> 
                <div className="container-tables">
                    <div>
                        <label htmlFor="t1"><img src={balcao} alt="counter" className="counter"/>1</label>
                        <input type="radio" name="table" id="t1" value="1" onClick={handleClickMenu}/>
                    </div>
                    <div>
                        <label htmlFor="t2"><img src={mesas} alt="table" className="table-1"/>2</label>
                        <input type="radio" name="table" id="t2" value="2" onClick={handleClickMenu}/>
                    </div>
                    <div>
                        <label htmlFor="t3"><img src={mesas} alt="table" className="table-1"/>3</label>
                        <input type="radio" name="table" id="t3" value="3" onClick={handleClickMenu}/>
                    </div>
                    <div>                  
                        <label htmlFor="t4"><img src={mesas} alt="table" className="table-1"/>4</label>
                        <input type="radio" name="table" id="t4" value="4" onClick={handleClickMenu}/>
                    </div>
                    <div>
                        <label htmlFor="t5"><img src={sofa} alt="sofa" className="sofa"/>5</label>
                        <input type="radio" name="table" id="t5" value="5" onClick={handleClickMenu}/>
                    </div>
                    <div>
                        <label htmlFor="t6"><img src={sofa} alt="sofa" className="sofa"/>6</label>
                        <input type="radio" name="table" id="t6" value="6" onClick={handleClickMenu}/>
                    </div>
                    <div>
                        <label htmlFor="t7"><img src={sofa} alt="sofa" className="sofa"/>7</label>
                        <input type="radio" name="table" id="t7" value="7" onClick={handleClickMenu}/>
                    </div>
                </div>
            <Footer />   
        </div>
    )
}

export default Tables;

