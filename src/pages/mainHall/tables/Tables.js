import React from 'react';

import NavBar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer';

import balcao from '../../../img/balcao.png'
import mesas from '../../../img/mesas.png'
import sofa from '../../../img/sofa.png'

import './Tables.css';


function Tables () {
    return(
        <div>
            <div>
                <NavBar />
            </div> 
            <div>

            </div>
                <div className="container-tables">
                    <section className="section-counter">
                        <img src={balcao} alt="counter" className="counter"/>
                    </section>
                    <section className="section-table">
                        <img src={mesas} alt="table 1" className="table-1"/>
                        <img src={mesas} alt="table 2" className="table-1"/>
                        <img src={mesas} alt="table 3" className="table-1"/>
                    </section>
                    <section className="section-sofa">
                        <img src={sofa} alt="sofa 1" className="sofa"/>
                        <img src={sofa} alt="sofa 2" className="sofa"/>
                        <img src={sofa} alt="sofa 3" className="sofa"/>
                    </section>
                </div>
            <Footer />   
        </div>
        
    )
}

export default Tables;

