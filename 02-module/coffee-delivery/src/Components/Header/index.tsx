import { MapPin, ShoppingCart } from 'phosphor-react'
import logoImg from '../../assets/logo.png'
import { HeaderContainer } from './styles'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoImg}
          alt="a logo consiste em um copo de café com tampa na cor roxa e com um desenho em branco de um foguete de decolando com um caminho de fumaça atrás e ao lado o nome da cafeteria 'Coffee Delivery' com uma palavra abaixo da outra"
        />
      </NavLink>
      <nav>
        <NavLink to="#" title="Google Maps">
          <MapPin size={22} weight="fill" />
          Belo Jardim, PE
        </NavLink>
        <NavLink to="/success" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
