import { formatDistance } from 'date-fns'
import { Container, Header } from './style'
import { ptBR } from 'date-fns/locale/pt-BR'

interface CardProps {
  title: string
  description: string
  createdAt: Date
}

export function Card({ title, description, createdAt }: CardProps) {
  const dateDistance = formatDistance(createdAt, new Date(), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <span>{dateDistance}</span>
      </Header>
      <p>{description}</p>
    </Container>
  )
}
