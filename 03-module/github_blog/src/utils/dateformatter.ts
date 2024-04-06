import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function dateFormatted(date: string | null | undefined) {
  if (!date) {
    return null
  }
  const dateDistance = formatDistance(date, new Date(), {
    locale: ptBR,
    addSuffix: true,
  })

  return dateDistance
}
