import React from "react"
import useCv from "../../hooks/useCv"
import { FormatoFecha } from "../../helpers/FormatDate"
const WrapperSchool = () => {
  const cv = useCv()
  const { school } = cv.my_cv
  return (
    <div className="Education">
      <div className="wrapperTitle">
        <h4 className="title">Educación.</h4>
        <hr />
      </div>
      <div className="wrapperList">
        {school.map(item => (
          <div key={item.id} className="item">
            <p className="itemTitle">{item.title}</p>
            <div className="wrapperDate">
              <p>{item.beginDate && FormatoFecha(item.beginDate)}</p>
              <p>{item.finishDate && FormatoFecha(item.finishDate)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WrapperSchool
