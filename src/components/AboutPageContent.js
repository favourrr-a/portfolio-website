import SocialMediaLinks from '../components/SocialMediaLinks';
import '../styles/AboutPageContent.css';
function AboutPageContent(){
return(
    <div className='about-content-container'>
        <div className = "group">
            <h2 className='group-heading'>
                Introduction
            </h2>
            <p className='group-content'>
                My name is Favour Ackonu. I am based in Ghana. 
            </p>
        </div>

        <div className = "group">
            <h2 className='group-heading'>
                Skills
            </h2>
            <p className='group-content'>
                <ul className='skills-list'>
                    <li className = "skills-list-item"> Java </li>
                    <li className = "skills-list-item"> Java </li>
                    <li className = "skills-list-item"> Java </li>
                    <li className = "skills-list-item"> Java </li>
                    <li className = "skills-list-item"> Java </li>
                </ul>
            </p>
        </div>

        <div className = "group">
            <h2 className='group-heading'>
                Education
            </h2>
            <p className='group-content'>
                Bsc. Computer Science with Mathematics
            </p>
        </div>

         <div className = "group">
            <h2 className='group-heading'>
                Socials
            </h2>
            <p className='group-content'>
            <ul className='socials-list'>
                <li className = "socials-list-item"> <a href = "https://www.linkedin.com/in/favour-ackonu/"> LinkedIn </a> </li>
                <li className = "socials-list-item"> <a href = "https://github.com/favourrr-a"> Github </a> </li>
                <li className = "socials-list-item"> <a href = "https://twitter.com/favour_ya"> Twitter </a> </li>
            </ul>            
            </p>
        </div>
    </div>
)
}

export default AboutPageContent;