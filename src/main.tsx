import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'

const Home = lazy(() => import('./pages/Home'));
const Research = lazy(() => import('./pages/Research'));
const Signals = lazy(() => import('./pages/Signals'));
const Education = lazy(() => import('./pages/Education'));  
const Pricing = lazy(() => import('./pages/Pricing'));  
const Account = lazy(() => import('./pages/Account'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Suspense fallback={<div className="py-10">Loading...</div>}><Home /></Suspense> },
      { path: 'research', element: <Suspense fallback={<div className="py-10">Loading...</div>}><Research /></Suspense> },
      { path: 'signals', element: <Suspense fallback={<div className="py-10">Loading...</div>}><Signals /></Suspense> },
      { path: 'education', element: <Suspense fallback={<div className="py-10">Loading...</div>}><Education /></Suspense> },
      { path: 'pricing', element: <Suspense fallback={<div className="py-10">Loading...</div>}><Pricing /></Suspense> },
      { path: 'account', element: <Suspense fallback={<div className="py-10">Loading...</div>}><Account /></Suspense> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
