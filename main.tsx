import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./mainBasicStyle.css"
import { router } from './Router'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
  
)
