import React from "react"
import useCv from "../../hooks/useCv"
import ItemContact from "./ItemContact"

const WrapperContact = () => {
  const cv = useCv()
  const { contact } = cv.my_cv
  return (
    <div className="Contact">
      <div className="wrapperTitle">
        <h4 className="title">Contactame.</h4>
      </div>
      {contact.map(item => (
        <ItemContact key={item.id} data={item} />
      ))}
    </div>
  )
}

export default WrapperContact
