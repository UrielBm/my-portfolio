import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { useEffect } from "react"
const AboutMe = () => {
  const perfil = useStaticQuery(graphql`
    query {
      allDatoCmsAboutMe(filter: { locale: { eq: "es" } }) {
        nodes {
          title
          description
          name
          picture {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              forceBlurhash: true
            )
          }
        }
      }
    }
  `)
  const {
    title,
    name,
    description,
    picture,
  } = perfil.allDatoCmsAboutMe.nodes[0]
  const image = getImage(picture)
  useEffect(() => {
    const desc = document.querySelector("#desc")
    desc.innerHTML = description
  }, [description])
  return (
    <section className="aboutMe">
      <div className="wrapperTitle">
        <h3 className="title">{title}</h3>
        <hr />
      </div>
      <div className="wrapperPerfil">
        <GatsbyImage
          image={image}
          alt="my photo"
          className="wrapperPicture"
          imgClassName="photo"
        />
        <div className="wrapperInfo">
          <h4 className="myName">Mi nombre es {name}.</h4>
          <div className="wrapperContact">
            <a
              href="https://github.com/UrielBm"
              target="_black"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/icons/github.svg"
                width={30}
                quality={70}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="github icon"
                className="wrapperIcon"
                imgClassName="imgIcon"
                placeholder="blurred"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/uriel-ben%C3%ADtez-medina/"
              target="_black"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/icons/linkedin.svg"
                width={30}
                quality={70}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="github icon"
                className="wrapperIcon"
                imgClassName="imgIcon"
                placeholder="blurred"
              />
            </a>
            <a
              href={`mailto:urielbenitez96@hotmail.com?Subject=Nos gusto tu portfolio`}
              target="_black"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/icons/email.svg"
                width={30}
                quality={70}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="github icon"
                className="wrapperIcon"
                imgClassName="imgIcon"
                placeholder="blurred"
              />
            </a>
            <a
              href="https://twitter.com/CouthUriel"
              target="_black"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/icons/twitter.svg"
                width={30}
                quality={70}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="github icon"
                className="wrapperIcon"
                imgClassName="imgIcon"
                placeholder="blurred"
              />
            </a>
          </div>
          <p className="description" id="desc"></p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
