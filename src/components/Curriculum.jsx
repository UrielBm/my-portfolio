import React from "react"
import Perfil from "./CV/Perfil"
import WrapperContact from "./CV/WrapperContact"
import WrapperSchool from "./CV/WrapperSchool"
import Description from "./CV/Description"
import WrapperWorkExp from "./CV/WrapperWorkExp"
import WrapperSkills from "./CV/WrapperSkills"
import pdf from "../components/assets/Cv Benitez Medina Uriel.pdf"
const Curriculum = () => {
  return (
    <>
      <div className="my_cv">
        <div className="my_cvLeft">
          <Perfil />
          <WrapperSchool />
          <WrapperContact />
        </div>
        <div className="my_cvRight">
          <Description />
          <WrapperWorkExp />
          <WrapperSkills />
        </div>
      </div>
      <div className="wrapperButtonDownload">
        <a href={pdf} download className="ButtonDownload">
          Descargar cv en pdf
        </a>
      </div>
    </>
  )
}

export default Curriculum
