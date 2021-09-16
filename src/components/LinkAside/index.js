/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react'
import './linkAside.scss'


export default function LinkAside({
 children, className, type, onClick
}) {
  return (
    <li type={type} onClick={onClick}>
      <a>
        <div className={`item-aside ${type} ${className}`}>
         
        </div>
      </a>
      <div className={`effects ${className}`}>
        <div className={`border-link ${className}`}>
          <span>{children}</span>
        </div>
        <div className="underline"></div>

      </div>
    </li>

  )
}
