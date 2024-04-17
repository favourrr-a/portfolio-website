import '../styles/HeaderContent.css'
import Image from './Image.js';
import { useNavigate } from 'react-router-dom';

function HeaderContent(){
    const navigate = new useNavigate();
    const navToThingsIveDone = () => {

        navigate('/thingsIveDone');
    }
    return(
    <>
    <div id="header-content-1">
    

    </div>
    <div id="header-content-2">
        <div className='header-actual-content'>
            <h2> Hi</h2>
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
                <div className='buttons'>
                    <div className='button-in-body'>
                        hire me
                    </div>
                    <div className='button-in-body' onClick={navToThingsIveDone}>
                        see stuff i've done
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

export default HeaderContent;