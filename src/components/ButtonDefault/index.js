/* eslint-disable react/prop-types */

import React from 'react';
import './buttonDefault.scss'

export default function ButtonDefault({
 children, className, onClick
}) {
  return (
    <button
    type="button"
    className={className}
    onClick={onClick}
    data-testid="button"
  >
    {children}
  </button>
  )
}