import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  // Passing object to props
  // let obj = {
  //   username: "Pradeep",
  //   age: 19
  // }

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
      <Card channel= "Chai aur code" /> {/* someObj= {obj} Here we are passing 'obj' as variable to props.*/}
      <Card channel= "Pradeep"/>
    </>
  )
}

export default App
