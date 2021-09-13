/* eslint-disable */
import React from 'react';
import { useHistory } from "react-router-dom";
function Mesas({mesa}){ 
    const history = useHistory()
    
    

  return (

    <label key={mesa} className="buttons-mesas">
            
    <div className="table-button">
    <div className="red-circle">
        <div className="yellow-circle">
            <div className="little-circle">
                <input
                type="button"
                value={`Mesa ${mesa}`}
                className="button-mesa"
                onClick={() => {
                    history.push({
                        pathname: `table/pedidos`
                    })
                }}

                >
            

                </input>
            </div>


        </div>

    </div>

</div>

    </label>

  )
}
 // eslint-disable-next-line

export default  Mesas