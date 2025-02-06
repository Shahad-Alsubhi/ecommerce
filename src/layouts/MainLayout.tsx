import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import ScrollToTop from '../ScrollToTop'

const MainLayout = () => {

  return (
    <div>
      <ScrollToTop/>
        <Header/>
        <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default MainLayout
