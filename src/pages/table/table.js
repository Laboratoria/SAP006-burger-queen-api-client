/* eslint-disable */

import React from 'react';
import '../table/table.css';
import Mesa from '../../components/mesa'

function Table() {

const routerPedidos = () => {
    history.push('/table/pedidos')
}


  return (
      <div className="container">
          <header>
          <div class="bubble-1 bubble-container anim bubble-animation-x">
            <div class="bubble bubble-animation-y"></div>
         </div>
 
          <div class="bubble-2 bubble-container anim bubble-animation-x">
             <div class="bubble bubble-animation-y"></div>
          </div>

        <div class="bubble-3 bubble-container anim bubble-animation-x">
          <div class="bubble bubble-animation-y"></div>
        </div>
 
        <div class="bubble-4 bubble-container anim bubble-animation-x">
           <div class="bubble bubble-animation-y"></div>
          </div>

<div class="bubble-5 bubble-container anim bubble-animation-x">
  <div class="bubble bubble-animation-y"></div>
</div>
  <div className="back-log">
  </div>
    </header>

    <div>
         <div>
          <Mesa />
         </div>
         <div>
        <Mesa />
         </div>
         <div>
         <Mesa />
         </div>
         </div>
   
      </div>
  );
  }
  
  export default Table;
  