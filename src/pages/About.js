import BackgroundParticles from '../components/BackgroundParticles';
import NavBar from '../components/NavBar';
import AboutPageContent from '../components/AboutPageContent';
import '../styles/LandingPage.css'
function About(){
    return(
    <>
        <div className="header-container">
            <div className = "inner-container">
                <NavBar/>
                <BackgroundParticles/>
                <AboutPageContent/>
            </div>
        </div>
    </>
    )
}

export default About;