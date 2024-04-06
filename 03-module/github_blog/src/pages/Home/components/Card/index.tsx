import { Container, Header } from './style'
import Markdown from 'react-markdown'
import { dateFormatted } from '../../../../utils/dateformatter'

interface CardProps {
  title: string
  description: string | null | undefined
  createdAt: string
}

export function Card({ title, description, createdAt }: CardProps) {
  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <span>{dateFormatted(createdAt)}</span>
      </Header>
      <div>
        <Markdown>{description}</Markdown>
      </div>
    </Container>
  )
}
