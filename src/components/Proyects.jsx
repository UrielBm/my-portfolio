import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ItemProyect from "./ItemProyect"
import ListProyects from "./ListProyects"
const Proyects = () => {
  const arrayData = useStaticQuery(graphql`
    query {
      allDatoCmsProyect(filter: { locale: { eq: "es" } }) {
        nodes {
          title
          webLink
          repoLink
          slug
          description
          imgs {
            gatsbyImageData(
              width: 650
              placeholder: BLURRED
              forceBlurhash: true
            )
          }
        }
      }
    }
  `)
  const proyects = arrayData.allDatoCmsProyect.nodes
  return (
    <div className="wrapperProyects">
      <div className="wrapperTitle">
        <h3 className="title">Mis proyectos favoritos.</h3>
        <hr />
      </div>
      <div className="proyects">
        {proyects.map(proyect => (
          <ItemProyect key={proyect.slug} proyect={proyect} />
        ))}
      </div>
      <div className="listProyects">
        <ListProyects />
      </div>
    </div>
  )
}

export default Proyects
