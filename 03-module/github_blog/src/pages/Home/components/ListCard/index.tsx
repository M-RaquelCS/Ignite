/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Card } from '../Card'
import { GridContainer } from './style'

export function ListCard() {
  const [issues, setIssues] = useState([] as any)
  useEffect(() => {
    fetch('https://api.github.com/repos/m-raquelcs/ignite/issues')
      .then((response) => response.json())
      .then((data) => setIssues(data))
  }, [])
  // é de longe uma opção viável chamar aqui e assim mas é o que temos

  return (
    <GridContainer>
      {issues.map((issue: any) => (
        <Card
          key={issue.id}
          title={issue.title}
          description={issue.body}
          createdAt={issue.created_at}
        />
      ))}
    </GridContainer>
  )
}
