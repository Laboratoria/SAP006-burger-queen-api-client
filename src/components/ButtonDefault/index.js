/* eslint-disable react/prop-types */

import React from 'react';
import {Button} from 'react-bootstrap';

export default function ButtonDefault({
 children, id, className, variant, type, size, onclick 
}) {
  return (
    <Button
    id={id}
    className={className}
    variant={variant}
    type={type}
    size={size}
    onClick={onclick}
  >
    {children}
  </Button>
  )
}