import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
const Hero = () => {
  const { backgroundImg } = useStaticQuery(graphql`
    query {
      backgroundImg: file(relativePath: { eq: "backgrounds/bg3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 950
            quality: 70
            webpOptions: { quality: 70 }
            formats: WEBP
            placeholder: BLURRED
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
    }
  `)
  const image = getImage(backgroundImg)
  return (
    <>
      <BgImage image={image} className="hero">
        <div className="wrapperInfo">
          <div className="type_name">
            <h4>Uriel Benítez Medina.</h4>
          </div>
          <div className="type_code">
            <p>
              <span>Web </span>Developer.
            </p>
          </div>
        </div>
      </BgImage>
    </>
  )
}

export default Hero
