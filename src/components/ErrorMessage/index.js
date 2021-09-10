/* eslint-disable react/prop-types */
import React from 'react';

export default function ErrorMessage({ children }) {
  return (
    <p className="text-danger">
      {children}
    </p>
  )
}