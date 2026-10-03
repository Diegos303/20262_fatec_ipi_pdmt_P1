import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './styles.css'
import { PrimeReactProvider } from '@primereact/core'
import Aura from '@primeuix/themes/aura'
import 'primeflex/primeflex.min.css'
import {PRIMEUI_LICENSE} from './utils/chaves.js'
import 'primeicons/primeicons.css'

const primereact = {
  theme: {
    preset: Aura
  },
  license: PRIMEUI_LICENSE
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider {...primereact}>
      <App />
    </PrimeReactProvider>
  </StrictMode>
)
