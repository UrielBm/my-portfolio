const FormatDescription = description => {
  let descr = description.split("**")
  descr = descr.map((text, index) => {
    if (index === 1) {
      return {
        type: "subtitle",
        data: text,
      }
    } else {
      return {
        type: "parrafo",
        data: text,
      }
    }
  })
  return descr
}
export default FormatDescription
