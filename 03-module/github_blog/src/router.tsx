import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/layout'

import Home from './pages/Home'
import { Post } from './pages/Post'
import { LayoutPost } from './layouts/layoutpost'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/post" element={<LayoutPost />}>
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
