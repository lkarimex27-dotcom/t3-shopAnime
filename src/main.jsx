import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './features/auth/Hooks/CartContext';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <StrictMode>
      <App />
      <SpeedInsights />
    </StrictMode>
  </CartProvider>
)
