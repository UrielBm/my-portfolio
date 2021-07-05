import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Certificado = ({ certificado }) => {
  const image = getImage(certificado.img)
  return (
    <div>
      <GatsbyImage
        image={image}
        alt="Certificado img"
        className="wrapperCertificado"
        imgClassName="certificado"
      />
    </div>
  )
}

export default Certificado
