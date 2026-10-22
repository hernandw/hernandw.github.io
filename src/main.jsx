import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx' // <--- Importamos el ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoryRouter>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </MemoryRouter>
  </StrictMode>,
)