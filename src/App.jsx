import './App.scss';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import AppsFilter from './pages/AppsFilters/AppsFilter';
import { NavContextProvider } from '../src/Context/navContext'
import Contactus from './pages/Contactus/Contactus.jsx';
import Productsinfo from './pages/Productsinfo/Productsinfo.jsx';

function App() {
  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "Apps", element: <AppsFilter /> },
        { path: "Contactus", element: <Contactus /> },
        { path: "ProductsInfo", element: <Productsinfo /> },
      ]
    }
  ])
  return <>
    <NavContextProvider>
      <RouterProvider router={routers}>
      </RouterProvider>
    </NavContextProvider>
  </>
}

export default App;
