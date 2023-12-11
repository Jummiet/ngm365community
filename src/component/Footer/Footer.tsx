import './Footer.css'
import VectorFooter from '../../assets/VectorFooter.png'
function Footer() {
  return (
    <div id='contact'>
    <div className="main-container">
    <div className="footer-container">
        <div className="footer-logo">
            <img src={VectorFooter} alt='footer-Image' />
        </div>
        <div className="contact">
            <h2>Contact</h2>
            <p>info@nigeriam365community.com</p>
        </div>
        <div className="quick-link">
            <h2>About Us</h2>
            <p>Events</p>
            <p>Members</p>
        </div>
        <div className="social-media">
            <h2>Stay up to date</h2>
            <input type="text" placeholder="Enter your email" />
            <div className="social-media-icon">
                <a href="https://www.youtube.com/@ngm365meetupschannel6" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                <a href="https://www.linkedin.com/company/ngm365grp/?viewAsMember=true" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.twitter.com/ngM365" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
            <div className="social-media-name">
            <a href="https://www.youtube.com/@ngm365meetupschannel6" target="_blank" rel="noreferrer">Youtube</a>
            <a href="https://www.linkedin.com/company/ngm365grp/?viewAsMember=true" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.twitter.com/ngM365" target="_blank" rel="noreferrer">Twitter</a>
            </div>
           
        </div>
    </div>
    <hr></hr>
    <div className="footer-bottom">
        <p>© 2023 Nigeria M365 Community. All rights reserved</p>
    </div>

    </div>

    </div>

  )
}

export default Footer