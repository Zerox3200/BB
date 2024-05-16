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
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import UserProvider from './Context/UserContext.jsx';

let query = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={query}>
    <NavProvider>
      <UserProvider>
        <Toaster position="bottom-right" toastOptions={{ className: "Toast" }} />
        <App />
      </UserProvider>
    </NavProvider>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
);


reportWebVitals();
