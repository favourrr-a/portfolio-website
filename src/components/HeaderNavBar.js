import { useNavigate } from 'react-router-dom';

import '../styles/HeaderNavBar.css'

function HeaderNavBar() {
const navigate = useNavigate();

    const navToHome = () => {

        navigate('/home');
    }

    const navToAbout = () => {

        navigate('/about');
    }


    const navToContact = () => {

        navigate('/contact');
    }

    return(
        <div className = "header-nav-bar-content">
            <div className = "nav-bar-content" id = "nav-bar-content-1" onClick={navToHome}>
                Home
            </div>
            <div className = "nav-bar-content" id = "nav-bar-content-2" onClick={navToAbout}>
                About
            </div>
            <div className = "nav-bar-content" id = "nav-bar-content-3" onClick={navToContact}>
                Contact
            </div>
        </div>
    )
}

export default HeaderNavBar;