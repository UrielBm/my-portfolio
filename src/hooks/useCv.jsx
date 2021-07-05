import { useStaticQuery, graphql } from "gatsby"
const useCv = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsCvInfo(filter: { locale: { eq: "es" } }) {
        nodes {
          title
          name
          picture {
            gatsbyImageData(
              width: 400
              forceBlurhash: true
              placeholder: BLURRED
            )
          }
        }
      }
      allDatoCmsCvSchool(
        filter: { locale: { eq: "es" } }
        sort: { fields: beginDate, order: ASC }
      ) {
        nodes {
          id
          title
          beginDate
          finishDate
        }
      }
      allDatoCmsCvContact(filter: { locale: { eq: "es" } }) {
        nodes {
          id
          typeContact
          data
          img {
            gatsbyImageData(
              width: 40
              placeholder: BLURRED
              forceBlurhash: true
            )
          }
        }
      }
      allDatoCmsCvDescription(filter: { locale: { eq: "es" } }) {
        nodes {
          description
        }
      }
      allDatoCmsWorkExperiencce(
        sort: { fields: finishDate, order: DESC }
        filter: { locale: { eq: "es" } }
      ) {
        nodes {
          id
          company
          job
          descripcion
          beginDate
          finishDate
        }
      }
      allDatoCmsCvSkill(
        filter: { locale: { eq: "es" } }
        sort: { fields: beginDate, order: ASC }
      ) {
        nodes {
          id
          beginDate
          name
        }
      }
    }
  `)
  const my_cv = {
    perfil: data.allDatoCmsCvInfo.nodes[0],
    school: data.allDatoCmsCvSchool.nodes,
    contact: data.allDatoCmsCvContact.nodes,
    description: data.allDatoCmsCvDescription.nodes[0],
    work_expirience: data.allDatoCmsWorkExperiencce.nodes,
    skills: data.allDatoCmsCvSkill.nodes,
  }

  return { my_cv }
}

export default useCv
