/* eslint-disable react/prop-types */
import React from 'react'
import './linkAside.scss'


export default function LinkAside({
 children, className, type 
}) {
  return (
    <li>
      <a href>
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
