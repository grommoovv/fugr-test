import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './shared/styles/styles.scss'
import { ReduxProvider } from './providers/redux'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
)
