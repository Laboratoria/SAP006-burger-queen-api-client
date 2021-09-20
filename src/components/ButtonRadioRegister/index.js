/* eslint-disable react/prop-types */

import React from 'react';
import './buttonRadioRegister.scss'

export default function ButtonRadioRegister({ onChange }) {
  return (
    <div className="switch-field-register margin-top-2">
      <input type="radio"
							variant="secondary"
							name="role"
							value="hall"
							id="hall"
							onChange={onChange}
							className="radio-btn" />
      <label htmlFor="hall">Salão</label>
      <input type="radio"
							variant="secondary"
							name="role"
							value="kitchen"
							id="kitchen"
							onChange={onChange}
							className="radio-btn"/>
      <label htmlFor="kitchen">Cozinha</label>
    </div>
  )
}