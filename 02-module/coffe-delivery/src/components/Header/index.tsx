import { HeaderContainer, NavigationHeader } from './styles'

import { ShoppingCart, MapPin } from '@phosphor-icons/react'

import FullLogo from '../../assets/full-logo.svg'

export function Header(){
  return (
    <HeaderContainer>
      <a href="/">
        <img src={FullLogo} alt="logo do coffee delivery" />
      </a>

      <NavigationHeader>

        <span>
          <MapPin size={22} weight="fill" />
          <p>Belo Jardim, PE</p>
        </span>

        <a href="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </a>

      </NavigationHeader>
      
    </HeaderContainer>
  )
}