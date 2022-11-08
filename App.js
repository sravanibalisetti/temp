import React, { useState } from 'react'
import Cal from './Cal'
import Transfer from './Transfer'
import Test from'./Test';
const App = () => {
  <div id="history">
  <h1>history</h1>
  </div>
  const [data,setData]=useState(true)


  return (
   <div>
  
      { data === true ? <div> <button id="apb" onClick = {() => {          setData(false)}}>History</button> <Cal/></div> :
< Transfer/>
}
</div>
  )
}

export default App;
