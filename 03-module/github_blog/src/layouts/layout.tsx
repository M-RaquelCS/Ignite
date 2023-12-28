import { Outlet } from 'react-router-dom'

import cover from '../assets/cover.svg'

export function DefaultLayout() {
  return (
    <main>
      <img
        src={cover}
        style={{ width: '100%' }}
        alt="imagem cover github blog"
      />
      <Outlet />
    </main>
  )
}
