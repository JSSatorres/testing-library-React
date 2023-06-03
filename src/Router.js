import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout'
import Home from './Pages/home'
import NoMatch from './Pages/noMatch'
import CharacterCard from './components/characterCard'
import Login from './Pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/register',
      //   element: <Home />,
      // },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'character/:id', // Ruta dinámica para el detalle del personaje
        element: <CharacterCard />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router