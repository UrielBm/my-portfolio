import React from "react"
import useCv from "../../hooks/useCv"
const Perfil = () => {
  const cv = useCv()
  const { title } = cv.my_cv.perfil
  return (
    <section className="perfil">
      <div className="wrapperPicture"></div>
      <div className="wrapperName">
        <h3 className="name">
          Uriel Benítez <span className="focus">Medina.</span>
        </h3>
      </div>
      <div className="wrapperSchool">
        <p className="school">{title}</p>
      </div>
    </section>
  )
}

export default Perfil
