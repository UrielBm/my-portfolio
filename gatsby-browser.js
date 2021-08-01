import React from "react"
import DarkModeProvider from "./src/context/DarkmodeContext"

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>{element}</DarkModeProvider>
)
