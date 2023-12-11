import speaker from '../../assets/speaker.png'
import './Speakers.css'
function Speakers() {
  return (
        <div className="speaker-container">
          <div className="image-container">
          <img className='speaker-image' src={speaker} alt="speaker-image" />
          </div>
            <div className="speaker">
                <h4>Calling on Speakers to Contribute Their Expertise</h4>
                <p>Join us in building a diverse and knowledgeable conference lineup. We invite passionate individuals to volunteer as speakers and contribute their valuable insights to our event. Together, we can create an enriching and memorable conference experience.</p>
                <button>Apply here</button>
            </div>
        </div>
  )
}

export default Speakers