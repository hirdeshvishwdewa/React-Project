import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const increaseCounter = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  }
  const decreaseCounter = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  }
  return (
    <>
        <h1>Chai aur react hookscounter project</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={increaseCounter}>Increase Value {counter}</button>
        <br />
        <button onClick={decreaseCounter}>Decrease Value {counter}</button>
        <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
