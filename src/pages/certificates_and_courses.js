import React, { useContext } from "react"
import { DarkmodeContext } from "../context/DarkmodeContext"
import Layout from "../components/layout"
import WrapperCertificates from "../components/WrapperCertificates"
import "./../css/Certificates.scss"
const Certificates_and_courses = () => {
  const { dark } = useContext(DarkmodeContext)
  return (
    <Layout>
      <div className={`wrapperCertificates ${dark ? "Darkmode" : "Whitemode"}`}>
        <WrapperCertificates />
      </div>
    </Layout>
  )
}

export default Certificates_and_courses
