import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import NotFound from './components/pages/NotFound.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotFound />
  </StrictMode>,
)
