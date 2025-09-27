import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed]= useState(false)
  const [password, setPassword]= useState("")

  // useRef hook 
  const passwordRef = useRef(null)

  // Using useCallback hook to generate password
  /* Humne useCallback mei 'setPassword' isliye liya hai */
  const passwordGenerator = useCallback( ()=> {
    // 'pass' variable jo bhi password generate hoga isme dalenge
    let pass = ""
    // 'str' varible mein password mein kon-konse characters aane chahiye
    let str = "ABCDEFGHIJKLMNOPQURTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(charactersAllowed) str+= "@#$%^~&*_-[]{}"

    // loop to generate random password
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      // Kyunki 'char' mein jo value aayegi vo array ki index aayega vo value nhi aayegi, isliye charAt() 
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charactersAllowed, setPassword])

  /* Ab yaha par humne useCallback ka isliye istemaal kiya hai keval optimisation ke liye. Kyunki jaha jaha par bhi dependency hai jaha par ye run hoga to vaha par keval optimised kar do jaise yaha par password par dependent hai. */
  const copyPasswordToClipboard = useCallback(()=>{
    // More optimised way
    passwordRef.current?.select()
    // First way
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect( ()=> { 
    passwordGenerator()
  }, [length, numberAllowed, charactersAllowed, passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder="Password"
            readOnly 
            ref={passwordRef} //Now ab passwordRef ke paas iska reference hai
          />
          {/* Button par click karne par konsa function execute hoga uska refrernce diya hai. */}
          <button
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={16

              }
              value={length}
              className='cursor-pointer'
              onChange={ (e)=> {setLength(e.target.value)}
              } 
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked= {numberAllowed}
              id='numberInput'
              onChange={(e) => { setNumberAllowed((prev) => !prev) }
              }
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked= {charactersAllowed}
              id='characterInput'
              onChange={(e) => { setCharactersAllowed((prev) => !prev) }
              }
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
