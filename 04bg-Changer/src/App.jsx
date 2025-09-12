import { useState } from "react"

function App() {
  const [colour, setColour] = useState("olive")

  return (
    <>
      {/* Hume states 'colour' ko implement karne ke liye inline css likhni padegi aur iska syntax double curly brackets hi use hoga, react ka syntax hai. */}
      <div className="w-full h-screen duration-200" style={{backgroundColor: colour}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl">
            <button 
              onClick={ () => setColour("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>
                 Red 
            </button>
            <button 
              onClick={ () => setColour("Green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>
                Green
            </button>
            <button 
              onClick={ () => setColour("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>
                Blue
            </button>
            <button
              onClick={ () => setColour("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}}>
                Olive
            </button>
            <button
              onClick={ () => setColour("gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gray"}}>
                Gray
            </button>
            <button
              onClick={ () => setColour("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>
                Yellow
            </button>
            <button
              onClick={ () => setColour("pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>
                Pink
            </button>
            <button
              onClick={ () => setColour("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>
                Purple
            </button>
            <button
              onClick={ () => setColour("lavenderblush")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lavenderblush"}}>
                Lavender
            </button>
            <button
              onClick={ () => setColour("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>
                White
            </button>
            <button
              onClick={ () => setColour("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>
                Black
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
