import '../styles/SocialMediaLinks.css';
import {FaLinkedin} from 'react-icons/fa6';
import {FaGithub} from 'react-icons/fa6';
import {FaX} from 'react-icons/fa6';

function SocialMediaLinks(){
    return(
<div className='links'>
                <a href = "https://www.linkedin.com/in/favour-ackonu-b046a3295/">
                    <FaLinkedin className = "link-in-body"/>
                </a>
                <a href = "https://github.com/favourrr-a">
                    <FaGithub className = "link-in-body" id = "link-in-body-2"/>
                </a>
                <a href = "https://twitter.com/favour_ya">
                    <FaX className ="link-in-body" id = "link-in-body-3"/>
                </a>
            </div>
    )
}

export default SocialMediaLinks;