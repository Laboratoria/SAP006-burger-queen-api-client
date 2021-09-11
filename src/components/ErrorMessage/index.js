/* eslint-disable react/prop-types */
import React from 'react';
import '../../global.scss'

export default function ErrorMessage({ children }) {
  return (
    <p className="error-text">
      {children}
    </p>
  )
}