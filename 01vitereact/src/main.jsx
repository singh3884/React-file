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

//this is note working 

// const ReactElement = {                 //
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

//this is working
const anotherElement = (
    <a href="https://google.com" target='_blanck'>Visit google</a>
)
const reactElement = React.createElement(
    'a',
    {href:"https://google.com",target:'_blank'},
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp/>
    // anotherElement
    // reactElement
    <App/>
    )

