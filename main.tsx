import { createRoot } from 'react-dom/client'
import LoginMain from './Login/LoginMain'
import MainPage from './Pages/MainPage'
import "./mainBasicStyle.css"

createRoot(document.getElementById('root')!).render(
  <>
    {/* <LoginMain/> */}
    <MainPage/>
  </>
)
