import React from "react"
import useCv from "../../hooks/useCv"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Perfil = () => {
  const cv = useCv()
  const { name, title, picture } = cv.my_cv.perfil
  const image = getImage(picture)
  return (
    <section className="perfil">
      <div className="wrapperPicture">
        <GatsbyImage
          image={image}
          alt="my photo"
          className="wrapperPicture"
          imgClassName="photo"
        />
      </div>
      <div className="wrapperName">
        <h3 className="name">{name}</h3>
      </div>
      <div className="wrapperSchool">
        <p className="school">{title}</p>
      </div>
    </section>
  )
}

export default Perfil
