import ClockLoader from "react-spinners/ClockLoader";
import '../styles/LandingPage.css';
import '../styles/LoadingScreen.css';

function LoadingScreen(){
    
    return(
        <div className="header-container">
            <div className = "loading-screen-container">
                <ClockLoader color = "#F4A698"/> 
            </div>
        </div>
        
    );
}

export default LoadingScreen;