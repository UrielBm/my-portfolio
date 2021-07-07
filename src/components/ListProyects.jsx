import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Proyect from "./Proyect"
import { useState } from "react"
const ListProyects = () => {
  const list = useStaticQuery(graphql`
    query {
      allDatoCmsListProyect(
        filter: { locale: { eq: "es" } }
        sort: { fields: title, order: ASC }
      ) {
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
      {show && (
        <div className="wrapperList">
          {arraylist.map(proyect => (
            <Proyect key={proyect.slug} proyect={proyect} />
          ))}
        </div>
      )}
      <button className="actionButton" onClick={handleOnClick}>
        {show ? "Ocultar lista -" : "Checa más proyectos +"}
      </button>
    </>
  )
}

export default ListProyects
