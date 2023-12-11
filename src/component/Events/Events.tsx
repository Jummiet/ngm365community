import Frame7 from '../../assets/Frame7.png'
import FrameEntra from '../../assets/FrameEntra.png'
import FrameSecurity from '../../assets/FrameSecurity.png'
import './Events.css'
import ExpandableText from '../Data/ExpandableText'

function Events() {

    const text1 = "Are you ready to learn how to get the most out of Microsoft 365 Apps? Join us for a one-day event where we will show you how to create, collaborate, and communicate with the latest tools and features. You will discover how to use Word, Excel, PowerPoint, Outlook, Teams, Planner, SharePoint, OneDrive for Business, Exchange Online, Microsoft 365 Copilot, Viva, and more to boost your productivity and efficiency. Whether you are new to Microsoft 365 or want to refresh your skills, this event is for you. Take advantage of this opportunity to learn from experts, network with peers, and have some fun along the way. Register today and get ready for an exciting day of learning and discovery!"
    const text2 = "Are you ready to learn how to leverage Microsoft Entra (formely Azure AD) to secure your cloud applications and services? Join us for a one-day workshop where you will get hands-on experience with Microsoft Entra features such as identity protection, Privileged identity management (PIM), Identity governance, conditional access, single sign-on, Device Management, and more. You will also discover how to integrate Azure AD with other Microsoft solutions such as Office 365, Teams, and Power Platform. Don't miss this opportunity to boost your skills and knowledge of Azure AD in a day!"
    const text3 = "Join us for a thrilling and informative session on Microsoft 365 Security in a Day. You will learn how to protect your organization from cyber threats, manage compliance and governance, and empower your workforce with secure collaboration tools. Whether you are new to Microsoft 365 or looking to enhance your security posture, this event is for you. Don't miss this opportunity to discover the latest best practices and solutions from Microsoft experts and partners"


  return (
    <div id='events' >
    <div >
        <div className="event-header">
            <div className="swtich">
                <p className='active-switch'>Upcoming Events</p>
                <p className='inactive-switch'>Past Events</p>
            </div>
            <a href="https://www.youtube.com/@ngm365meetupschannel6
 " target='_blank'>View All Events</a>
        </div>

        <div className="card-container">
            <div className="card">
                <img className='card-image' src={Frame7} alt="image" />
                <div className="text-container">
                    <h4>Microsoft 365 Apps in a Day</h4>
                    <p>Dec 16, 2023, 9:00 am - 4pm</p>
                    <ExpandableText text={text1} maxLength={200} />
                    {/* <p>Members can connect with professionals who share similar interests in Microsoft 365. </p> */}
                    {/* <p className='see-more'>see more details...</p> */}
                </div>
            </div>
            <div className="card">
                <img className='card-image' src={FrameEntra} alt="image" />
                <div className="text-container">
                    <h4>Microsoft Entra in  a Day</h4>
                    <p>Dec 16, 2023, 9:00 am - 4pm</p>
                    <ExpandableText text={text2} maxLength={200} />
                    {/* <p>Members can connect with professionals who share similar interests in Microsoft 365. </p>
                    <p className='see-more'>see more details...</p> */}
                </div>
            </div>
            <div className="card">
                <img className='card-image'  src={FrameSecurity} alt="image" />
                <div className="text-container">
                    <h4>Microsoft 365 Security in a Day</h4>
                    <p>Dec 16, 2023, 9:00 am - 4pm</p>

                    <ExpandableText text={text3} maxLength={200} />
                    {/* <p>Members can connect with professionals who share similar interests in Microsoft 365. </p>
                    <p className='see-more'>see more details...</p> */}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Events