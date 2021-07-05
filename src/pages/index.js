import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"
import Proyects from "../components/Proyects"
import "./../css/Index.scss"
const IndexPage = () => (
  <Layout>
    <div className="wrapperIndex">
      <Hero />
      <AboutMe />
      <TechStack />
      <Proyects />
    </div>
  </Layout>
)

export default IndexPage
