import rafiki from '../../assets/rafiki.png'
import Icon1 from '../../assets/Group6.png'
import Icon2 from '../../assets/Group7.png'
import './MainPage.css'
function MainPage() {
  return (
    <div className='mainPage-container' id='about'>
        <div className="content">
            <h3>We offer networking opportunities among people with a shared interest in maximizing productivity through Microsoft 365 tools and services.</h3>
            <div className="sub-content">
                <div className="icon-title">
                    <img className='icons' src={Icon1} alt="icon" />
                    <h4>Knowledge Sharing</h4>
                </div>
                <p>We often share their expertise and experiences related to Mirosoft 365 (formerly known as Office 365).</p>
            </div>
            <div className="sub-content">
                <div className="icon-title">
                    <img className='icons' src={Icon2} alt="icon" />
                    <h4>Networking</h4>
                </div>
                <p>Members can connect with professionals who share similar interests in Microsoft 365.</p>
            </div>
            <button>Read More...</button>
        </div>
        <div className="image-container">
            <img className='image' src={rafiki} alt="image-Design" />
        </div>
    </div>
  )
}

export default MainPage