import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app.tsx'
import { enableWorker } from './api/mocks/index.ts'

enableWorker().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
