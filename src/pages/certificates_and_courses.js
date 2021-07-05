import React from "react"
import Layout from "../components/layout"
import WrapperCertificates from "../components/WrapperCertificates"
import "./../css/Certificates.scss"
const certificates_and_courses = () => {
  return (
    <Layout>
      <div className="wrapperCertificates">
        <WrapperCertificates />
      </div>
    </Layout>
  )
}

export default certificates_and_courses
