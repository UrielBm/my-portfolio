import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import FormatDescription from "../helpers/FormatDescription"
const ItemProyect = ({ proyect }) => {
  const image = getImage(proyect.imgs)
  const data = FormatDescription(proyect.description)
  return (
    <div className="wrapperProyect">
      <GatsbyImage
        image={image}
        alt="my photo"
        className="wrapperImg"
        imgClassName="img"
      />
      <div className="wrapperInfo">
        <div className="wrapperTitle">
          <h4 className="title">Título: {proyect.title}</h4>
          <div className="wrapperLinks">
            <a
              href={proyect.repoLink}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <StaticImage
                src="../images/icons/github.svg"
                quality={70}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="github icon"
                className="wrapperIcon"
                imgClassName="imgIcon"
                placeholder="blurred"
              />
            </a>
            <a
              href={proyect.webLink}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <StaticImage
                src="../images/icons/www.svg"
                quality={70}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="web icon"
                className="wrapperIcon"
                imgClassName="imgIcon"
                placeholder="blurred"
              />
            </a>
          </div>
        </div>
        <div className="wrapperDescription">
          <h5 className="descriptionTitle">Descripción:</h5>
          <div className="description">
            {data.map((text, id) =>
              text.type === "subtitle" ? (
                <h5 key={`${text.type}-${id}`} className={text.type}>
                  {text.data}
                </h5>
              ) : (
                <p key={`${text.type}-${id}`} className={text.type}>
                  {text.data}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemProyect
