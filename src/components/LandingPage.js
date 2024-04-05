import HeaderNavBar from './HeaderNavBar';
import HeaderContent from './HeaderContent';
import '../styles/LandingPage.css'
function LandingPage() {


    return (
        <>
            <div className="header-container">
                    <HeaderNavBar />
                    <HeaderContent />
            </div>
        </>
    )
}

export default LandingPage;