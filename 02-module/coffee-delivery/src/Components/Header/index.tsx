import logoImg from '../../assets/logo.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoImg}
        alt="a logo consiste em um copo de café com tampa na cor roxa e com um desenho em branco de um foguete de decolando com um caminho de fumaça atrás e ao lado o nome da cafeteria 'Coffee Delivery' com uma palavra abaixo da outra"
      />
      <nav>
        <div>
          <p>Belo Jardim, PE</p>
        </div>
        <a href="#">store</a>
      </nav>
    </HeaderContainer>
  )
}
