import { Timer, Scroll } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src="./ignite.svg" alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
