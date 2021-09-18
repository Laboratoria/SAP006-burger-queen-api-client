
import React from 'react'
import './inputSelect.scss'

const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function InputSelect() {
  return (
    
      <select>
          <option value ="" hidden >Mesa</option>
          {tables.map(table=>
             <option  key={table} value={table}>{table}</option>)}
        </select>
 
  );
}

