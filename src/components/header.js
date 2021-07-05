import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "@reach/router"
import NavBar from "./NavBar"
import "./../css/Header.scss"
const Header = ({ siteTitle }) => (
  <header className="header">
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
    <div className="wrapperNav">
      <NavBar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
