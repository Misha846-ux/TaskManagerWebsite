import { createRoot } from 'react-dom/client'
import LoginMain from './Login/LoginMain'
import MainPage from './Pages/Main/MainPage'

createRoot(document.getElementById('root')!).render(
  <>
    {/* <LoginMain/> */}
    <MainPage/>
  </>
)
