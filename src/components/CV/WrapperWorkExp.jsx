import React from "react"
import { FormatoFecha } from "../../helpers/FormatDate"
import useCv from "../../hooks/useCv"

const WrapperWorkExp = () => {
  const cv = useCv()
  const { work_expirience } = cv.my_cv
  return (
    <div className="Wrapperwork">
      <div className="wrapperTitle">
        <h4>Experiencia.</h4>
      </div>
      <div className="listWork">
        {work_expirience.map(work => (
          <div key={work.id} className="work">
            <div className="wrapperCompany">
              <div className="wrapperInfo">
                <h5>{work.company},</h5>
                <p>
                  <span>{work.location}:</span>
                  {work.job}
                </p>
              </div>
              <div className="wrapperDates">
                <p>{FormatoFecha(work.beginDate)}-</p>
                <p>{FormatoFecha(work.finishDate)}</p>
              </div>
            </div>
            <div className="workDescription">
              <p>{work.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WrapperWorkExp
