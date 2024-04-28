import React, { Suspense, lazy, useEffect } from 'react';
import './App.scss';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Loading from './components/Loading/Loading.jsx';
import AdminLayout from './pages/AdminLayout.jsx';
import Policy from './pages/Policy/Policy.jsx';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useTranslation } from 'react-i18next';

const Contactus = lazy(() => import("./pages/Contactus/Contactus.jsx"));
const Productsinfo = lazy(() => import("./pages/Productsinfo/Productsinfo.jsx"));
const AppsFilter = lazy(() => import("./pages/AppsFilters/AppsFilter"));
const AdminLogin = lazy(() => import('./pages/Admin/Login/Login.jsx'));


function App() {
  const { i18n } = useTranslation();

  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "Apps", element: <Suspense fallback={<Loading />}><AppsFilter /> </Suspense> },
        { path: "Contactus", element: <Suspense fallback={<Loading />}><Contactus /> </Suspense> },
        { path: "ProductsInfo", element: <Suspense fallback={<Loading />}><Productsinfo /> </Suspense> },
        { path: "Policy", element: <Suspense fallback={<Loading />}><Policy /> </Suspense> },
      ]
    }, {
      path: '', element: <AdminLayout />, children: [
        { path: "Login2030", element: <Suspense fallback={<Loading />}><AdminLogin /> </Suspense> },
      ]
    }
  ]);
  const MainLanguage = reactLocalStorage.get("lan");

  useEffect(() => {
    if (MainLanguage) {
      i18n.changeLanguage(MainLanguage.toLowerCase());
    }
  }, [MainLanguage, i18n])

  return <>
    <RouterProvider router={routers}>
    </RouterProvider>
  </>
}

export default App;
