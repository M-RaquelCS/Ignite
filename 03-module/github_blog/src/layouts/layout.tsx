import { Outlet } from 'react-router-dom'

import cover from '../assets/cover.svg'
import { Profile } from '../components/Profile'

export function DefaultLayout() {
  return (
    <main>
      <div style={{ display: 'grid', justifyItems: 'center' }}>
        <img
          src={cover}
          style={{ width: '100%', zIndex: -1, position: 'sticky' }}
          alt="imagem cover github blog"
        />
        <Profile />
      </div>
      <Outlet />
    </main>
  )
}
