import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/main.css'
import App from './App';
import {SideBarProvider} from "./context/index";
import './locales/i18next'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideBarProvider>    
      <App />
    </SideBarProvider>
  </React.StrictMode>
);

