import { useState, useEffect } from "react";
import HeaderNavBar from './NavBar';
import HeaderContent from './HeaderContent';
import LoadingScreen from './LoadingScreen';
import '../styles/LandingPage.css'
function LandingPage({argument}) {

const [loading, setLoading] = useState(true);

    useEffect(()=> {
        if(argument){
            setLoading(true);
        }
        else{
            setLoading(false);
            setTimeout(() => {
                setLoading(true);
            }, 11000)
        }
    }, [])

    return (
        <>
        {!loading ? <LoadingScreen/> :
        
        <div className="header-container">
            <div className = "inner-container">
                <HeaderNavBar />
                <HeaderContent />
            </div>
        </div>   
         }
         </>
    )
}

export default LandingPage;