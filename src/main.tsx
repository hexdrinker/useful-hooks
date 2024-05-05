import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UseInput from './pages/useInput.tsx'
import UseTabs from './pages/useTabs.tsx'
import UseTitle from './pages/useTitle.tsx'
import UseClick from './pages/useClick.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/use-input',
    element: <UseInput />,
  },
  {
    path: '/use-tabs',
    element: <UseTabs />,
  },
  {
    path: '/use-title',
    element: <UseTitle />,
  },
  {
    path: '/use-click',
    element: <UseClick />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
