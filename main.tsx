import { createRoot } from 'react-dom/client'
import LoginMain from './Login/LoginMain'
import Header from './Header/Header'
import MainPage from './Pages/Main/MainPage'

createRoot(document.getElementById('root')!).render(
  <>
    <LoginMain/>
    <Header/>
    {/* <MainPage/> */}
  </>
)
