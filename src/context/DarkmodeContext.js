import React, { createContext, useState } from "react"

export const DarkmodeContext = createContext()

const DarkModeProvider = props => {
  const [dark, setDark] = useState(false)
  return (
    <DarkmodeContext.Provider value={{ dark, setDark }}>
      {props.children}
    </DarkmodeContext.Provider>
  )
}
export default DarkModeProvider
