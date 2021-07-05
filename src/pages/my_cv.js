import React from "react"
import Layout from "../components/layout"
import Curriculum from "../components/Curriculum"
import "./../css/My_cv.scss"
const my_cv = () => {
  return (
    <Layout>
      <div className="wrapperCv">
        <Curriculum />
      </div>
    </Layout>
  )
}

export default my_cv
