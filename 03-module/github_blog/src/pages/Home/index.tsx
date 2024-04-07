import { ListCard, totalIssues } from './components/ListCard'
import { Container, Header } from './styles'

export default function Home() {
  return (
    <Container>
      <Header>
        <h3>Publicações</h3>
        <span>{totalIssues} publicações</span>
      </Header>
      <ListCard />
    </Container>
  )
}
