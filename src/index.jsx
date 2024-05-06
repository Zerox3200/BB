import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './i18n';
import NavProvider from './Context/NavContext.jsx';
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NavProvider>
    <Toaster position="bottom-right" toastOptions={{ className: "Toast" }} />
    <App />
  </NavProvider>
);


reportWebVitals();
