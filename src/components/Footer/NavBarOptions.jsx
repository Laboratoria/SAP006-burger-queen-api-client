import React from "react";
import { Link } from "react-router-dom";
import SectionMenuOptions from './style';

const MenuOptionsNavBar = () => (
     
    <SectionMenuOptions>
        <section>
            <Link to='/tables'> Mesas</Link>
            <Link > Cardápio</Link>
            <Link to='/orders-status'> Status do Pedido</Link>
            <Link to='/'> Sair</Link> 
                         
        </section>
    </SectionMenuOptions>

)

export default MenuOptionsNavBar;

