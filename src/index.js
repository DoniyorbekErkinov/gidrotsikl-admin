import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/main.css'
import App from './App';
import {CartProvider} from "./context/index";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>    
      <App />
    </CartProvider>
  </React.StrictMode>
);

