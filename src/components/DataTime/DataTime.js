import React from "react"; 

export function DataTime(){ 
    let currentdate = new Date() 
    let clock =`Data: ${currentdate.getDate()}/${(currentdate.getMonth()+1)}/${currentdate.getFullYear()} 
                    ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}` 
                    
return( 
    <h2>{clock}</h2> 
) 
} 

export default DataTime;