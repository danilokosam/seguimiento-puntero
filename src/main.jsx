import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { App } from './App'
import './index2.css'
import { App2 } from './App2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
