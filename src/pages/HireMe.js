import BackgroundParticles from '../components/BackgroundParticles';
import NavBar from '../components/NavBar';
import '../styles/LandingPage.css'
function HireMe(){
    return(
    <>
        <div className="header-container">
            <BackgroundParticles/>
            <div className = "inner-container">
                <NavBar/>
            </div>
        </div>
    </>
    )
}

export default HireMe;