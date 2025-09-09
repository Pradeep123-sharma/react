import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Used a hook useState()
  let [counter, setCounter] = useState(5)
  const addValue = ()=> {
    console.log("value added");
    if (counter !== 20) {
      counter += 1
      setCounter(counter)
    }
  }
  const removeValue = ()=> {
    if(counter !== 0){
      counter -= 1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick= {addValue}>Add Value</button>
      <br />
      <button onClick= {removeValue}>Decrease value</button>
    </>
  )
}

export default App
