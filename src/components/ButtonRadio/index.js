/* eslint-disable react/prop-types */

import React from 'react';
import './buttonRadio.scss'

export default function ButtonRadio({ onChange, radioClassName }) {
  return (
    <div className="switch-field">
      <input type="radio"
							variant="secondary"
							name="role"
							value="hall"
							id="hall"
							onChange={onChange}
							className={radioClassName} />
      <label htmlFor="hall">Salão</label>
      <input type="radio"
							variant="secondary"
							name="role"
							value="kitchen"
							id="kitchen"
							onChange={onChange}
							className={radioClassName}/>
      <label htmlFor="kitchen">Cozinha</label>
    </div>
  )
}