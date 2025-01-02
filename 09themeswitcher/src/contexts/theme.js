import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    ThemeMode : "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})
export const themeProvidern = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}