import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card  from './components/Card'
//Tailwind css link:-https://tailwindcss.com/
function App() {
 let myObj = {
  username: "Avinash",
  age:21
 }
 let newArray =[1,2,3]
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400  text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
   <Card username = "ChaiAurCode"btnText="Click Me" />
   <Card username="Avinash" btnText="visit Me"/>
   <Card/>
    </>
  )
}

export default App
