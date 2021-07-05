import { format } from "date-fns"
import { es } from "date-fns/locale"

export const formatDate = date => {
  return format(new Date(date), "MMM/yyyy")
}
export const FormatoFecha = date => {
  return format(new Date(date), "MMM/yyyy", {
    locale: es,
  })
}
