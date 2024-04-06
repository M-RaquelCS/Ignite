import { Container, Header } from './style'

interface CardProps {
  title: string
  description: string
}

export function Card({ title, description }: CardProps) {
  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <span>há 1 dia</span>
      </Header>
      <p>{description}</p>
    </Container>
  )
}
