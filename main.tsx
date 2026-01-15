import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginMain from './Login/LoginMain'
import MainPage from './Pages/MainPage'
import "./mainBasicStyle.css"
import { router } from './Router'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
  
)
