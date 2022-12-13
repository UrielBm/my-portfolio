import React from "react"
import useCv from "../../hooks/useCv"
import { FormatoFecha } from "../../helpers/FormatDate"
const WrapperSchool = () => {
  const cv = useCv()
  const { school } = cv.my_cv
  return (
    <div className="Education">
      <div className="wrapperTitle">
        <h4 className="title">Formación.</h4>
      </div>
      <div className="wrapperList">
        {school.map(item => (
          <div key={item.id} className="item">
            <p className="itemTitle">
              {item.title},<span className="location">{item.location}:</span>
              <span className="degree">{item.degree}</span>
            </p>
            <div className="wrapperDate">
              <p>{item.beginDate && FormatoFecha(item.beginDate)}</p>
              <p>{item.finishDate && FormatoFecha(item.finishDate)}</p>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WrapperSchool
