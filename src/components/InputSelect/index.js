
import React from 'react'
import './inputSelect.scss'

const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const onChange = (e) =>{
//   console.log(e.target.value)
// }


export default function InputSelect(name, value, onChange) {
  return (
    
      <select onChange={onChange} name={name}>
          <option value ="" hidden >Mesa</option>
          {tables.map(table=>
             <option  name={name} key={table} value={table}>{table}</option>)}
        </select>
 
  );
}

