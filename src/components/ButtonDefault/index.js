/* eslint-disable react/prop-types */

import React from 'react';
import './buttonDefault.scss'

export default function ButtonDefault({
 children, className, onclick 
}) {
  return (
    <button
    className={className}
    onClick={onclick}
  >
    {children}
  </button>
  )
}