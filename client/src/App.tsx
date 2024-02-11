import { lazy, Suspense } from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Loading from './components/Loading';
import Layout from "./pages/Layout"

const InboxPage = lazy(()=>import('./pages/Inbox'));
const ProjectsPage = lazy(()=>import('./pages/Projects'));
const NotFoundPage = lazy(()=>import('./pages/NotFound'));
const ColorsPage = lazy(()=>import('./pages/Colors'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<Loading />}><InboxPage /></Suspense>,
      },
      {
        path: "/projects",
        element: <Suspense fallback={<Loading />}><ProjectsPage /></Suspense>,
      },
      {
        path: "*",
        element: <Suspense fallback={<Loading />}><NotFoundPage /></Suspense>,
      }
    ],
    
  },
  {
    path: "/colors",
    element: <Suspense fallback={<Loading />}><ColorsPage /></Suspense>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
