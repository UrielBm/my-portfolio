import React, { createContext, useState } from "react"

const defaultState = {
  dark: false,
}
export const DarkmodeContext = createContext(defaultState)

const DarkModeProvider = props => {
  const [dark, setDark] = useState(false)
  return (
    <DarkmodeContext.Provider value={{ dark, setDark }}>
      {props.children}
    </DarkmodeContext.Provider>
  )
}
export default DarkModeProvider
