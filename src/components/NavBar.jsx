import React, { useContext } from "react"
import { DarkmodeContext } from "../context/DarkmodeContext"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const NavBar = () => {
  const { dark } = useContext(DarkmodeContext)
  return (
    <nav className="nav">
      <Link to="/my_cv" className="link" activeClassName="link_activo">
        <div className="wrapperItem">
          <div className="wrapperIcon">
            <StaticImage
              src="../images/icons/approved.svg"
              quality={70}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="img_cv"
              className="wrapperIcon"
              imgClassName="imgIcon"
              placeholder="blurred"
            />
          </div>
          <p className={dark ? "textItemDark" : "text_item"}>Mi Cv</p>
        </div>
      </Link>
      <Link
        to="/certificates_and_courses"
        className="link"
        activeClassName="link_activo"
      >
        <div className="wrapperItem">
          <div className="wrapperIcon">
            <StaticImage
              src="../images/icons/certificate.svg"
              quality={70}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="img_courses"
              className="wrapperIcon"
              imgClassName="imgIcon"
              placeholder="blurred"
            />
          </div>
          <p className={dark ? "textItemDark" : "text_item"}>
            Mis certificados y cursos
          </p>
        </div>
      </Link>
    </nav>
  )
}

export default NavBar
