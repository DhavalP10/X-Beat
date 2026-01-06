// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Components/CartContext.jsx'
import { SearchProvider } from './Components/SearchContext.jsx'
import ProductProvider  from "./context/ProductContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <SearchProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </SearchProvider>
    </CartProvider>
  </BrowserRouter>
)
