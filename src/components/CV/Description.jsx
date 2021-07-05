import React from "react"
import useCv from "../../hooks/useCv"

const Description = () => {
  const cv = useCv()
  const { description } = cv.my_cv.description
  return (
    <div className="wrapperDescription">
      <div className="wrapperTitle">
        <h4>Acerca de mi</h4>
        <hr />
      </div>
      <p className="description">{description}</p>
    </div>
  )
}

export default Description
