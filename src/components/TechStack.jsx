import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const TechStack = () => {
  return (
    <div className="wrapperTechStack">
      <div className="wrapperTitle">
        <h3 className="title">¿Cuál es mi Stack tecnológico?</h3>
        <hr />
      </div>
      <div className="wrapperImgs">
        <StaticImage
          src="../images/tech/react.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="react"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/next.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="next"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/gatsby.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="gatsby"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/Nodejs.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Nodejs"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/express.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Express"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/mongodb.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="MongoDB"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/html5.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="HTML5"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/css.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="CSS"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/javascript_logo.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="JavaScript"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/sass.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Sass"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/Laravel.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Laravel"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
        <StaticImage
          src="../images/tech/mysql_logo.png"
          quality={65}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="MySql"
          className="wrapperImg"
          imgClassName="carouselImg"
          placeholder="blurred"
        />
      </div>
    </div>
  )
}

export default TechStack
