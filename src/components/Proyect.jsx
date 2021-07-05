import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Proyect = ({ proyect }) => {
  const { title, short, webLink, repoLink } = proyect
  return (
    <div className="proyect">
      <div className="mostInfo">
        <h5>{title}</h5>
        <p>{short}</p>
      </div>
      <div className="wrapperLinks">
        <a href={repoLink} target="_black" rel="noreferrer" className="link">
          <StaticImage
            src="../images/icons/github.svg"
            width={21}
            quality={70}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="github icon"
            className="wrapperIcon"
            imgClassName="imgIcon"
            placeholder="blurred"
          />
        </a>
        <a href={webLink} target="_black" rel="noreferrer" className="link">
          <StaticImage
            src="../images/icons/www.svg"
            width={21}
            quality={70}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="github icon"
            className="wrapperIcon"
            imgClassName="imgIcon"
            placeholder="blurred"
          />
        </a>
      </div>
    </div>
  )
}

export default Proyect
