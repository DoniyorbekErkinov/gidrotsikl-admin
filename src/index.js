import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/main.css'
import App from './App';
import {SideBarProvider} from "./context/index";
import './locales/i18next'
import "react-toastify/dist/ReactToastify.css";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideBarProvider>    
      <App />
      <ToastContainer/>
    </SideBarProvider>
  </React.StrictMode>
);

