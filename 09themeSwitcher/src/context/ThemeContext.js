import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    // Giving our values initially
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {}
}) 

// Exporting Provider also from same file
/* Agar hum pichle project mei "UserContextProvider.jsx" dekhe to humne alag file leke fir provider banaya tha, usme values diye the aur 'children' prop pass karke components ko wrap kiya tha.
Lekin hum yaha par sidhe hi provider export kar rhe hao aur fir sidhe hi "App.jsx" mei values pass karke components ko wrap kar denge.*/
export const ThemeProvider = ThemeContext.Provider

// Creating our Custom Hook
export default function useTheme(){
    return useContext(ThemeContext)
}
