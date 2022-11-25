import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// product provider
import ProductProvider from './context/ProductContext.js';
// sidebar provider
import SidebarProvider from './context/SidebarContext.js';
// cart provider
import CartProvider from './context/CartContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </CartProvider>
  </SidebarProvider>
);