import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  // Using useState() hook to change states
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = ()=> {
    setThemeMode("dark")
  }
  const darkTheme = ()=> {
    setThemeMode("light")
  }

  // Actually Change the themes by useEffect() Hook
  useEffect(() => {
    
    // Removing initial values from whole html page so that we can add new value
    document.querySelector('html').classList.remove("light", "dark")

    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button component */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card Component */}
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
