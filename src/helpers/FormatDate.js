import { format } from "date-fns"
import { es } from "date-fns/locale"

export const formatDate = date => {
  return format(new Date(date), "MMM/yyyy")
}
export const FormatoFecha = date => {
  if (date !== null) {
    return format(new Date(date), "MMMM/yyyy", {
      locale: es,
    })
  } else {
    return "PRESENTE"
  }
}
