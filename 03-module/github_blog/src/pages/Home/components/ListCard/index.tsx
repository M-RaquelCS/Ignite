import { GridContainer } from './style'
import { Card } from '../Card'

interface ListCardPros {
  listIssues:
    | {
        id: number
        number: number
        title: string
        body: string | undefined
        createdAt: string
      }[]
    | undefined
}

export function ListCard({ listIssues }: ListCardPros) {
  return (
    <GridContainer>
      {listIssues ? (
        listIssues.map((issue) => (
          <Card
            key={issue.id}
            id={issue.number}
            title={issue.title}
            description={issue.body}
            createdAt={issue.createdAt}
          />
        ))
      ) : (
        <h3>Nenhuma issue há mostrar</h3>
      )}
    </GridContainer>
  )
}
