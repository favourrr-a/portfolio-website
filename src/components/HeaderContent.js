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
            <TextAnimation/>
            <div>
                <p className ='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Vivamus arcu felis bibendum ut tristique et. Faucibus a pellentesque sit amet porttitor eget dolor. At elementum eu facilisis sed 
                odio morbi quis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Neque ornare aenean euismod elementum. Purus 
                sit amet volutpat consequat mauris. Vitae 
                semper quis lectus nulla at volutpat diam ut. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Massa tincidunt nunc pulvinar sapien et.
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