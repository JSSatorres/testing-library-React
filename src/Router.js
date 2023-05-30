import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout'
import Home from './Pages/home'
import NoMatch from './Pages/noMatch'
import CharacterCard from './components/characterCard'

// import AboutMe from './pages/aboutMe'
// import ContactPage from './pages/contact'
// import ProjectsPage from './pages/projectsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'character/:id', // Ruta dinámica para el detalle del personaje
        element: <CharacterCard />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    //   {
    //     path: 'aboutme',
    //     element: <AboutMe />,
    //   },
    //   {
    //     path: 'contact',
    //     element: <ContactPage />,
    //   },
    //   {
    //     path: 'projects',
    //     element: <ProjectsPage />,
    //   },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router