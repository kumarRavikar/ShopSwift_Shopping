import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProductContextProvider } from './contex/productContext.jsx'

createRoot(document.getElementById('root')).render(
    <ProductContextProvider><App /></ProductContextProvider>
    
)
