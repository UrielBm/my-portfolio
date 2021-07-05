import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const ItemContact = ({ data }) => {
  const contact = data
  const image = getImage(contact.img)
  return (
    <div className="wrapperContact">
      <p className="name">{contact.typeContact}</p>
      <a href={contact.data} target="_black" rel="noreferrer" className="link">
        <div className="wrapperIcon">
          <GatsbyImage
            image={image}
            width={10}
            alt={`icon-${contact.typeContact}`}
            className="wrapperIcon"
            imgClassName="icon"
          />
        </div>
      </a>
    </div>
  )
}

export default ItemContact
