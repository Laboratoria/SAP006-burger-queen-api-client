/* eslint-disable react/jsx-key */
import React from 'react'
import './inputSelect.scss'

const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function InputSelect() {
  return (
    
      <select>
          <option value ="" hidden >Número da Mesa</option>
          {tables.map(table=>
             <option  value={table}>{table}</option>)}
        </select>
 
  );
}

