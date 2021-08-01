import React, { useContext } from "react"
import { DarkmodeContext } from "../context/DarkmodeContext"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"
import Proyects from "../components/Proyects"
import "./../css/Index.scss"
const IndexPage = () => {
  const { dark } = useContext(DarkmodeContext)
  return (
    <Layout>
      <div className={`wrapperIndex ${dark ? "Darkmode" : "Whitemode"}`}>
        <Hero />
        <AboutMe />
        <TechStack />
        <Proyects />
      </div>
    </Layout>
  )
}

export default IndexPage
