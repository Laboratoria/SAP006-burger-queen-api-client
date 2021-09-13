/* eslint-disable react/prop-types */

import React from 'react';
import './buttonDefault.scss'

export default function ButtonDefault({
 children, className, onclick 
}) {
  return (
    <button
    type="button"
    className={className}
    onClick={onclick}
    data-testid="button"
  >
    {children}
  </button>
  )
}