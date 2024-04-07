import { GridContainer } from './style'
import { useQuery } from '@tanstack/react-query'
import { getIssues } from '../../../../services/getIssues'
import { Card } from '../Card'

export let totalIssues: number = 0

export function ListCard() {
  const issues = useQuery({
    queryKey: ['issues'],
    queryFn: () => getIssues(),
  })

  if (issues.data?.data.length) {
    totalIssues = issues.data?.data.length
  }

  if (issues.isPending) return 'Loading issues...'

  return (
    <GridContainer>
      {issues.data?.data.map((issue) => (
        <Card
          key={issue.id}
          id={issue.number}
          title={issue.title}
          description={issue.body}
          createdAt={issue.created_at}
        />
      ))}
    </GridContainer>
  )
}
