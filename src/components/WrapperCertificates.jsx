import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Certificado from "./Certificado"
const WrapperCertificates = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsCertificado(filter: { locale: { eq: "es" } }) {
        nodes {
          id
          img {
            gatsbyImageData(
              width: 960
              forceBlurhash: true
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `)
  const certificates = data.allDatoCmsCertificado.nodes
  return (
    <>
      {certificates.map(certificado => (
        <Certificado key={certificado.id} certificado={certificado} />
      ))}
    </>
  )
}

export default WrapperCertificates
