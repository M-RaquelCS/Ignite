import { Outlet } from 'react-router-dom'
import { LayoutCantainer } from './styles'

import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <LayoutCantainer>
      <Header />
      <Outlet />
    </LayoutCantainer>
  )
}
