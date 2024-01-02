import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //usestate gives 2 values in array format------let counter
   const [counter , setCounter] = useState(0)

 //let counter =5;
 const addValue = ()=>{
  // counter++;
  setCounter(counter+1)
  //  console.log("clicked" , counter);
 }
 const removeValue = ()=>{
     setCounter(counter-1)
 }
  return (
    <>
      <h1> stress Less </h1>
      <h3>Counter value {counter}</h3>

      <button
       onClick={addValue}
       >Add value {counter}
       </button> <br />
      <button
      onClick={removeValue}
      >remove value {counter}
      </button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
