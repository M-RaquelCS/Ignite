import { Outlet } from 'react-router-dom'

import cover from '../assets/cover.svg'

export function DefaultLayout() {
  return (
    <main>
      <img src={cover} alt="imagem cover github blog" />
      <Outlet />
    </main>
  )
}
