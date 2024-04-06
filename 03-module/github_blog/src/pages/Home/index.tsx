import { ListCard } from './components/ListCard'
import { Container, Header } from './styles'

export default function Home() {
  return (
    <Container>
      <Header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </Header>
      <ListCard />
    </Container>
  )
}
