import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'

const ProfessionalForm = lazy(() => import('./pages/ProfessionalForm.jsx'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage.jsx'))
const ProfessionalsList = lazy(() => import('./pages/ProfessionalsList.jsx'))
const TemplateSelection = lazy(() => import('./pages/TemplateSelection.jsx'))
const Error = lazy(() => import("./pages/Error.jsx"))


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <ProfessionalsList /> },
      { path: "/templates", element: <TemplateSelection /> },
      { path: "/form", element: <ProfessionalForm /> },
      { path: "/portfolio/:id", element: <PortfolioPage /> },
      { path: "/portfolio/:id/:templateKey", element: <PortfolioPage /> },
      { path: "/404", element: <Error /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)