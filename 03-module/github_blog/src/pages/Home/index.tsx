import { useQuery } from '@tanstack/react-query'
import { ListCard } from './components/ListCard'
import { Container, Header, SearchInput } from './styles'
import { searchIssue } from '../../services/searchIssue'
import { useState } from 'react'

interface IssueProps {
  id: number
  number: number
  title: string
  body: string | undefined
  created_at: string
}

export default function Home() {
  // const [input, setInput] = useState('')
  const [searchInput, setSearchInput] = useState('')

  const queryString = searchInput.replace(' ', '%20')
  const response = useQuery({
    queryKey: ['searchIssue'],
    queryFn: () => searchIssue(queryString),
    enabled: !!queryString,
  })

  const listIssues = response.data?.data.items.map((issue: IssueProps) => ({
    id: issue.id,
    number: issue.number,
    title: issue.title,
    body: issue.body,
    createdAt: issue.created_at,
  }))

  // if (response.isPending) return 'Loading...'

  console.log(response)

  return (
    <Container>
      <Header>
        <h3>Publicações</h3>
        <span>{response.data?.data.total_count} publicações</span>
      </Header>
      <SearchInput
        type="search"
        placeholder="Buscar contéudo"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <ListCard listIssues={listIssues} />
    </Container>
  )
}
