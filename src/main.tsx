import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//
import Navegation from './router/Navegation.tsx'

//------------------ Css -------------------------------
import './css/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navegation />
  </StrictMode>,
)
