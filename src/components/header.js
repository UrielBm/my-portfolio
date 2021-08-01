import React, { useContext } from "react"
import { DarkmodeContext } from "../context/DarkmodeContext"
import Seo from "../components/seo"
import InputDarkMode from "./InputDarkMode"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "@reach/router"
import NavBar from "./NavBar"
import "./../css/Header.scss"
const Header = ({ siteTitle }) => {
  const { dark } = useContext(DarkmodeContext)
  return (
    <header className={`header ${dark ? "backgroundDark" : "backgroundWhite"}`}>
      <Seo title={siteTitle} lang="es" />
      <Link to="/" className="link">
        <div className="wrapperLogo">
          <StaticImage
            src="../images/icon.png"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="logo"
            className="wrapperLogo"
            imgClassName="imgLogo"
            placeholder="blurred"
          />
        </div>
      </Link>
      <div>
        <InputDarkMode />
      </div>
      <div className="wrapperNav">
        <NavBar />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
