import React, { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { pathRoutes } from 'src/constants/path.routes'
import { AppContext } from 'src/contexts/app.contexts'
import MainLayout from 'src/layouts/MainLayout'
import About from 'src/pages/About/Index'
import Home from 'src/pages/Home/Index'
import Login from 'src/pages/Login'
import Register from 'src/pages/Register'

export default function routeElements() {
  const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.login} />
  }

  function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  }

  const routeElements = useRoutes([
    {
      index: true,
      path: '',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: pathRoutes.about,
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: pathRoutes.login,
          element: (
            <MainLayout>
              <Login />
            </MainLayout>
          )
        },
        {
          path: pathRoutes.register,
          element: (
            <MainLayout>
              <Register />
            </MainLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
