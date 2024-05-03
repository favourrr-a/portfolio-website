import '../styles/HeaderContent.css'
import Image from './Image.js';
import TextAnimation from './TextAnimation.js';

function HeaderContent(){
    
    return(
    <>
    <div id="header-content-1">
    

    </div>
    <div id="header-content-2">
        <div className='header-actual-content'>
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
            <div>
                <div className='links'>
                    <div className='link-in-body' id="link-in-body-1">
                        linkedIn
                    </div>
                    <div className='link-in-body' id="link-in-body-2">
                        Github
                    </div>
                    <div className='link-in-body' id="link-in-body-3">
                        X
                    </div>
                </div>
            </div>
        </div>

        <div className="image-container">
            <Image/>
        </div>   
        
    </div>
    </>
    )
}
//install react-icons
export default HeaderContent;