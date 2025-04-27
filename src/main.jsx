import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ImagePreviewProvider } from './components/ImagePreview.jsx'

// Check if vite-plugin-ssr is handling the rendering
if (!import.meta.env.SSR) {
  const root = document.getElementById('root')
  createRoot(root).render(
    <StrictMode>
      <ImagePreviewProvider>
        <App />
      </ImagePreviewProvider>
    </StrictMode>
  )
}
