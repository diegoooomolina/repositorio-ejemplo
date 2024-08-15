import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Componente } from './components/component-nav.jsx'
import './styles/nav.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Componente />
  </StrictMode>,
)
