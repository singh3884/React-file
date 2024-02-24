import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp() {
  

//     return (
//   <div>
//     <h1>Custom app!</h1>
//   </div>
//     )
// }
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
const anotherElement = (
    <a href="https://google.com" target='_blanck'>Visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    anotherElement
 
)
