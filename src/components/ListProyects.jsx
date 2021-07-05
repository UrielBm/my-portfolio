import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Proyect from "./Proyect"
import { useState } from "react"
const ListProyects = () => {
  const list = useStaticQuery(graphql`
    query {
      allDatoCmsListProyect(filter: { locale: { eq: "es" } }) {
        nodes {
          title
          short
          slug
          webLink
          repoLink
        }
      }
    }
  `)
  const [show, Setshow] = useState(false)
  const arraylist = list.allDatoCmsListProyect.nodes
  const handleOnClick = () => {
    Setshow(!show)
  }
  return (
    <>
      <button className="actionButton" onClick={handleOnClick}>
        Checa más proyectos.
      </button>
      {show && (
        <div className="wrapperList">
          {arraylist.map(proyect => (
            <Proyect key={proyect.slug} proyect={proyect} />
          ))}
        </div>
      )}
    </>
  )
}

export default ListProyects
