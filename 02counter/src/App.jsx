import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,AvinashCounter]= useState(15);
  // let counter = 12
const  addValue = ()=>{
  // console.log("Value is added", counter )
  // counter =counter +1;
 
  if(counter>=0 && counter <20) {

    AvinashCounter(counter+1)
  }
  
}

const removevalue = ()=>{
  if(counter >0 && counter <=20)
  {

    AvinashCounter(counter-1)
  }
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removevalue}>Remove value {counter} </button>
    </>
  )
}

export default App


//Assignment 
// We have to increase the out put in range {0,20}//Done

//GO and Read this artical
//https://github.com/acdlite/react-fiber-architecture

