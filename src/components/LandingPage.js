import HeaderNavBar from './HeaderNavBar';
import HeaderContent from './HeaderContent';
import '../styles/LandingPage.css'
function LandingPage() {


    return (
        <>
            <div className="header-container">
                <div className = "inner-container">
                    <HeaderNavBar />
                    <HeaderContent />
                </div>
            </div>
        </>
    )
}

export default LandingPage;