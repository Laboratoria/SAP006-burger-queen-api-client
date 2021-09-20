import React from 'react';
import { useHistory } from 'react-router-dom';

function Mesas({ mesa }) {
  const history = useHistory();
  return (

    <label htmlFor="button-table" type="button" key={mesa} className="buttons-mesas">

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
                    pathname: `saloon/pedidos/${mesa}`,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </label>

  );
}
export default Mesas;
