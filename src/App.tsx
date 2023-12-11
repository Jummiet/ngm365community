import './App.css'
import Header from './component/Header/Header'
import Navigation from './component/Navigation/Navigation'
import Profile from './component/Profile/Profile'
import Speakers from './component/Speakers/Speakers'
import Event from './component/Events/Events'
import Footer from './component/Footer/Footer'
import MainPage from './component/mainPage/MainPage'

function App() {

  return (
    <>
      <Navigation/>
      <Header/> 
      <Profile/>
      <MainPage/>
      <Event/>
      <Speakers/>
      <Footer/>
    </>
  )
}

export default App
