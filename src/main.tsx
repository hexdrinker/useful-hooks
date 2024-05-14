import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UseInput from './pages/useInput.tsx'
import UseTabs from './pages/useTabs.tsx'
import UseTitle from './pages/useTitle.tsx'
import UseClick from './pages/useClick.tsx'
import UseConfirm from './pages/useConfirm.tsx'
import UsePreventLeave from './pages/usePreventLeave.tsx'
import UseBeforeLeave from './pages/useBeforeLeave.tsx'
import UseFadeIn from './pages/useFadeIn.tsx'
import UseNetwork from './pages/useNetwork.tsx'
import UseScroll from './pages/useScroll.tsx'
import UseNotification from './pages/useNotification.tsx'

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
  {
    path: '/use-confirm',
    element: <UseConfirm />,
  },
  {
    path: '/use-prevent-leave',
    element: <UsePreventLeave />,
  },
  {
    path: '/use-before-leave',
    element: <UseBeforeLeave />,
  },
  {
    path: '/use-fade-in',
    element: <UseFadeIn />,
  },
  {
    path: '/use-network',
    element: <UseNetwork />,
  },
  {
    path: '/use-scroll',
    element: <UseScroll />,
  },
  {
    path: '/use-notification',
    element: <UseNotification />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
