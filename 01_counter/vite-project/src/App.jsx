import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  const subtractValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue} >Increment {counter}</button>
      <br />
      <button
        onClick={subtractValue}>Decrement {counter}</button>
        <br />
        <p>Counter is: {counter}</p>
    </>
  )
}

export default App
