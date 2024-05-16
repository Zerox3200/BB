import React, { Suspense, lazy, useContext, useEffect } from 'react';
import './App.scss';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Loading from './components/Loading/Loading.jsx';
import AdminLayout from './pages/AdminLayout.jsx';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useTranslation } from 'react-i18next';
import { UserContext } from './Context/UserContext.jsx';
import { jwtDecode } from "jwt-decode";
import Protector from './components/Protector/Protector.jsx';


const Contactus = lazy(() => import("./pages/Contactus/Contactus.jsx"));
const Productsinfo = lazy(() => import("./pages/Productsinfo/Productsinfo.jsx"));
const AppsFilter = lazy(() => import("./pages/AppsFilters/AppsFilter"));
const AdminLogin = lazy(() => import('./pages/Admin/Login/Login.jsx'));
const Policy = lazy(() => import("./pages/Policy/Policy.jsx"));
const DashApps = lazy(() => import("./pages/Admin/DashApps/DashApps.jsx"));
const DeleteApp = lazy(() => import("./components/AppsCrud/DeleteApp/DeleteApp.jsx"));
const AddApp = lazy(() => import("./components/AppsCrud/AddApp/AddApp.jsx"));
const UpdateImage = lazy(() => import("./components/AppsCrud/UpdateImage/UpdateImage.jsx"));
const UpdateApp = lazy(() => import("./components/AppsCrud/UpdateImage/UpdateImage.jsx"));
const DashAdmins = lazy(() => import("./pages/Admin/DashAdmins/DashAdmins.jsx"));
const AddAdmin = lazy(() => import("./components/AdminsCrud/AddAdmin/AddAdmin.jsx"));
const DeleteAdmin = lazy(() => import("./components/AdminsCrud/DeleteAdmin/DeleteAdmin.jsx"));

function App() {

  const { i18n } = useTranslation();
  const { setUserInformation } = useContext(UserContext);

  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "Apps", element: <Suspense fallback={<Loading />}><AppsFilter /> </Suspense> },
        { path: "Contactus", element: <Suspense fallback={<Loading />}><Contactus /> </Suspense> },
        { path: "/:AppId", element: <Suspense fallback={<Loading />}><Productsinfo /> </Suspense> },
        { path: "Policy", element: <Suspense fallback={<Loading />}><Policy /> </Suspense> },
      ]
    }, {
      path: '', element: <AdminLayout />, children: [
        { path: "Login2030", element: <Suspense fallback={<Loading />}><AdminLogin /> </Suspense> },
        {
          path: "DashApps2030", element:
            <Protector><Suspense fallback={<Loading />}><DashApps /></Suspense></Protector>,
          children: [{
            index: true,
            element: <Protector><Suspense fallback={<Loading />}> <AddApp /></Suspense></Protector>
          }, {
            path: "DeleteApp",
            element: <Protector><Suspense fallback={<Loading />}> <DeleteApp /></Suspense></Protector>
          }, {
            path: "UpdateAppImage",
            element: <Protector><Suspense fallback={<Loading />}> <UpdateImage /></Suspense></Protector>

          }, {
            path: "UpdateAppText",
            element: <Protector><Suspense fallback={<Loading />}> <UpdateApp /></Suspense></Protector>

          }]
        },
        {
          path: "Admins", element: <Suspense fallback={<Loading />}><DashAdmins /> </Suspense>,
          children: [
            { index: true, element: <Suspense fallback={<Loading />}><AddAdmin /> </Suspense> },
            { path: "DeleteAdmin", element: <Suspense fallback={<Loading />}><DeleteAdmin /> </Suspense> }
          ]
        }
      ]
    }
  ]);
  const MainLanguage = reactLocalStorage.get("lan");

  useEffect(() => {
    if (MainLanguage) {
      i18n.changeLanguage(MainLanguage.toLowerCase());
    }
  }, []);

  const token = reactLocalStorage.get("token");

  useEffect(() => {
    if (token) setUserInformation(jwtDecode(token));
  }, [token, setUserInformation])

  return <>
    <RouterProvider router={routers}>
    </RouterProvider>
  </>
}

export default App;
