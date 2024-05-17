import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './components/Login.tsx'
import ResetPassword from './components/ResetPassword.tsx'
import ConfirmEmail from './components/ConfirmEmail.tsx'
import CheckEmail from './components/CheckEmail.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/reset",
    element: <ResetPassword />
  },
  {
    path: "/confirm",
    element: <ConfirmEmail />
  },
  {
    path: "/check-email",
    element: <CheckEmail />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
