import { useState, useEffect } from "react";
import HeaderNavBar from './NavBar';
import HeaderContent from './HeaderContent';
import BackgroundParticles from '../components/BackgroundParticles';
import LoadingScreen from './LoadingScreen';
import '../styles/LandingPage.css'
function LandingPage() {

    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 11000)
    }, [])

    return (
        <>
        {loading ? <LoadingScreen/> :
        
        <div className="header-container">
            <div className = "inner-container">
                <BackgroundParticles/>
                <HeaderNavBar />
                <HeaderContent />
            </div>
        </div>   
         }
         </>
    )
}

export default LandingPage;