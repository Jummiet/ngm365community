import ImageIcon from '../../assets/amico.png'
import './Header.css'

function Header() {
  return (
    <div id='/' >
    <div className="mainWrapper" >
    <div className='header-container'>
        <div className="header-content">
            <div className="Title">
                <h1>Nigeria Microsoft 365 Community </h1>
            </div>
            <div className="SubTitle">
                <p>Sharing insights and experiences about everything on Office 365</p>
            </div>
         <a className='btn' target="_blank" href="https://chat.whatsapp.com/GOvoCSBLrBnIQe442q1uZk">Join Community</a>
        </div>
        <div className="ImageIcon">
            <img className='image' src={ImageIcon} alt="logo"/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Header