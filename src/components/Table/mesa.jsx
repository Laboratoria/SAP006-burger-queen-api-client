import React from 'react';
import { useHistory } from 'react-router-dom';

function Mesas({ mesa }) {
  const history = useHistory();

  return (

    // eslint-disable-next-line jsx-a11y/label-has-associated-control
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
                    pathname: 'table/pedidos',
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
