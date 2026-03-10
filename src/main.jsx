import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './features/auth/Hooks/CartContext';
import { SpeedInsights } from "@vercel/speed-insights/next";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <SpeedInsights>
  <CartProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </CartProvider>
  </SpeedInsights>
)
