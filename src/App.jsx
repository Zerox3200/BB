import React, { Suspense, lazy } from 'react';
import './App.scss';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Loading from './components/Loading/Loading.jsx';
import NavProvider from './Context/NavContext.jsx';

const Contactus = lazy(() => import("./pages/Contactus/Contactus.jsx"));
const Productsinfo = lazy(() => import("./pages/Productsinfo/Productsinfo.jsx"));
const AppsFilter = lazy(() => import("./pages/AppsFilters/AppsFilter"));
const AdminLogin = lazy(() => import('./pages/Admin/Login/Login.jsx'));


function App() {
  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "Apps", element: <Suspense fallback={<Loading />}><AppsFilter /> </Suspense> },
        { path: "Contactus", element: <Suspense fallback={<Loading />}><Contactus /> </Suspense> },
        { path: "ProductsInfo", element: <Suspense fallback={<Loading />}><Productsinfo /> </Suspense> },
        { path: "Login2030", element: <Suspense fallback={<Loading />}><AdminLogin /> </Suspense> },
      ]
    }
  ])
  return <>
    <NavProvider>
      <RouterProvider router={routers}>
      </RouterProvider>
    </NavProvider>
  </>
}

export default App;
