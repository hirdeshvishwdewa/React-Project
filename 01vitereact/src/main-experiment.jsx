import { createRoot } from 'react-dom/client'
import React from 'react'

// function MyApp() {
//   return (
//     <div>
//       <h1>My Experiment</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'http://google.com',
//       target: '_blank'
//   },
//   children: "Click me to visit Google!"
// }

// const anotherElement = (
//   <a href='http://googl.com' target='_blank'>Visit Google</a>
// )

const username = "Hirdesh";

const reactElement = React.createElement(
  "a",
  {href: "http://googl.com", target: "_blank"},
  "Click me to visit google ",
  username
)

createRoot(document.getElementById('root')).render(
  reactElement
)
