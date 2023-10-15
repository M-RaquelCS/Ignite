import { HeaderContainer, NavigationHeader } from './styles'

import { MapPin } from '@phosphor-icons/react'

import FullLogo from '../../assets/full-logo.svg'
import { CartLink } from './components/CartLink'

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

        <CartLink />

      </NavigationHeader>
      
    </HeaderContainer>
  )
}