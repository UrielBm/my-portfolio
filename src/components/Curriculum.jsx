import React from "react"
import Perfil from "./CV/Perfil"
import WrapperContact from "./CV/WrapperContact"
import WrapperSchool from "./CV/WrapperSchool"
import Description from "./CV/Description"
import WrapperWorkExp from "./CV/WrapperWorkExp"
import WrapperSkills from "./CV/WrapperSkills"
import pdf from "../components/assets/Cv Benitez Medina Uriel.pdf"
import WrapperAptitudes from "./CV/WrapperAptitudes"
const Curriculum = () => {
  return (
    <>
      <div className="my_cv">
        <div className="my_cvLeft">
          <Perfil />
          <WrapperWorkExp />
          <WrapperSchool />
        </div>
        <div className="my_cvRight">
          <WrapperContact />
          <WrapperAptitudes />
          <Description />
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
