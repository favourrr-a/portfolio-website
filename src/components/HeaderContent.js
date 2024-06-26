import '../styles/HeaderContent.css'
import SocialMediaLinks from './SocialMediaLinks.js';
import Image from './Image.js';
import TextAnimation from './TextAnimation.js';
import { useState, useEffect } from 'react';

function HeaderContent(){
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
        setSmallScreen(window.innerWidth <= 750);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    return(
    <>
    <div id={!smallScreen ? "header-content-2" : "header-content-2-small-screen"}>
        <div className={!smallScreen ? "header-actual-content" : "header-actual-content-small-screen"}>
            <TextAnimation par={!smallScreen ? "text-animation" : "text-animation-small"}/>
            <div>
                <p className = {!smallScreen ? "paragraph" : "paragraph-small"}>
                    My name is Favour Ackonu. I am a student of University of Ghana studying Bsc. Mathematical
                    Science, Computer Science with Mathematics. I am 18 years old. I am currently interested in
                    anything related to computers, but I have not yet chosen a specific field to specialize in. However, I do know what
                    I do not want to specialize in, and that is front-end development. It's too difficult for me. I mean, this website
                    is literally my best front-end work, and look at the state of it. But yes, I am willing to learn new things.
                </p>
            </div>
            <SocialMediaLinks/>
        </div>

        {
            !smallScreen ?  
            <div className="image-container">
                <Image/>
            </div>
            : 
            <></>
        }   
        
    </div>
    </>
    )
}
export default HeaderContent;