import { Container, Header } from './style'
import Markdown from 'react-markdown'
import { dateFormatted } from '../../../../utils/dateformatter'

interface CardProps {
  title: string
  description: string | null | undefined
  createdAt: string
  id: number
}

export function Card({ title, description, createdAt, id }: CardProps) {
  return (
    <Container href={`/post/${id}`}>
      <Header>
        <h3>{title}</h3>
        <span>{dateFormatted(createdAt)}</span>
      </Header>
      <div>
        <Markdown
          components={{
            a: ({ ...rest }) => <a style={{ color: '#3294F8' }} {...rest} />,
          }}
        >
          {description}
        </Markdown>
      </div>
    </Container>
  )
}
