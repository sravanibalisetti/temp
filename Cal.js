import './App.css';
import Transfer from './Transfer'
import {useState} from 'react'
function Cal() {
const [input,setInput]=useState(' ')
const [hist,setHist]=useState([])
const [rhist,setrHist]=useState([])
const [result,setResult]=useState(" ")
const [page,setPage]=useState(true)
const handler= e =>{
   setInput(e.target.value);
   }
function update (hist)
{
  console.log(rhist,'rhist')
setPage(false)
console.log(hist)
}
if(page==false)
{
return(<Transfer hist={hist} rhist={rhist}/>)
}
else{
return (
    <div ><h1>CALCULATOR</h1>
    <div>
    <div className="cal">
    <center>
<input  style={{backgroundColor:"white"}}onChange= {handler}  type="text" value={input} name="input"  /><br></br>
<button style={{backgroundColor:"violet"}} onClick={ () => {setResult(eval(input)); let his = input +"="+ eval(input);console.log(his); setHist([...hist,his]); }}>Result</button>
<h2>Result is :{result} </h2>
 <div className="keypad">
 <button onClick={() => setInput(input+'1')}>1</button>
 <button onClick={() => setInput(input+'2')}>2</button>
 <button onClick={() => setInput(input+'3')}>3</button>
 <button style={{backgroundColor:"crimson"}} onClick={() => setInput(input+'-')}>-</button>
 <br></br>
 <button onClick={() => setInput(input+'4')}>4</button>
 <button onClick={() => setInput(input+'5')}>5</button>
 <button onClick={() => setInput(input+'6')}>6</button>
 <button style={{backgroundColor:"gray"}}onClick={() => setInput(input+'/')}>/</button>
  <br></br>
 <button onClick={() => setInput(input+'7')}>7</button>
 <button onClick={() => setInput(input+'8')}>8</button>
 <button onClick={() => setInput(input+'9')}>9</button>
 <button  style={{backgroundColor:"chocolate"}} onClick={() => setInput(input+'+')}>+</button>
 <br></br>
 <button  style={{backgroundColor:"rgb(124, 124, 239)"}} onClick={() => setInput(input+'*')}>*</button>
 <button onClick={() => setInput(input+'0')}>0</button>
 <button  style={{backgroundColor:"skyblue"}}  onClick={() => setInput(input+'(')}>(</button>
 <button  style={{backgroundColor:"skyblue"}} onClick={()=> setInput(input+')')}>)</button>
 <br></br>
 <button style={{backgroundColor:"yellow"}} onClick={()=> setInput(input+'%')}>%</button>
 <button style={{backgroundColor:"green"}} onClick={()=>{ setResult(eval(input))}}>=</button>
 <button style={{backgroundColor:"lightpink"}} onClick={()=> {setResult(" "); setInput(" ")}}>AC</button>
 <button style={{backgroundColor:"lightpink"}} onClick={()=> { update(hist,rhist)  }}>History</button>
 </div>
  </center>
    </div>
    </div>
    </div>
  )
}
}
export default Cal;
