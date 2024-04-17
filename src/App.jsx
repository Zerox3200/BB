import './App.scss';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import AppsFilter from './pages/AppsFilters/AppsFilter';
import { NavContextProvider } from '../src/Context/navContext'

function App() {
  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "Apps", element: <AppsFilter /> }
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
