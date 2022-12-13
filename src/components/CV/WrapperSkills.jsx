import React from "react"
import { formatDistance } from "date-fns"
import { es } from "date-fns/locale"
import useCv from "../../hooks/useCv"
const WrapperSkills = () => {
  const cv = useCv()
  const { skills } = cv.my_cv
  return (
    <div className="wrapperSkills">
      <div className="wrapperTitle">
        <h4>Habilidades Técnicas.</h4>
      </div>
      <div className="skills">
        {skills.map(skill => (
          <div key={skill.id} className="skill">
            <p className="name">{skill.name}</p>
            <p className="date">
              {formatDistance(new Date(skill.beginDate), new Date(), {
                locale: es,
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WrapperSkills
