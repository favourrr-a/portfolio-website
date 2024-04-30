import HeaderNavBar from './NavBar';
import HeaderContent from './HeaderContent';
import BackgroundParticles from '../components/BackgroundParticles';
import '../styles/LandingPage.css'
function LandingPage() {


    return (
        <>
            <div className="header-container">
                <div className = "inner-container">
                    <BackgroundParticles/>
                    <HeaderNavBar />
                    <HeaderContent />
                </div>
            </div>
        </>
    )
}

export default LandingPage;