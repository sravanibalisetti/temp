import React, { useDebugValue } from 'react'


 function Transfer(props) {
var hist=props.hist;
console.log(hist)    
const listItems = hist.map((myList) =>  
<li>{myList}</li>
); 
return (
 
   
     <div>
              {listItems}  
     </div>


  )
 
  
    
  
    }
  
export default Transfer;




