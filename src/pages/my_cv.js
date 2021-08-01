import React, { useContext } from "react"
import { DarkmodeContext } from "../context/DarkmodeContext"
import Layout from "../components/layout"
import Curriculum from "../components/Curriculum"
import "./../css/My_cv.scss"
const My_cv = () => {
  const { dark } = useContext(DarkmodeContext)
  return (
    <Layout>
      <div className={`wrapperCv ${dark ? "Darkmode" : "Whitemode"}`}>
        <Curriculum />
      </div>
    </Layout>
  )
}

export default My_cv
