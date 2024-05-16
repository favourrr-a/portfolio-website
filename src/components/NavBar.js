import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa6';
import '../styles/NavBar.css'

function NavBar() {

    const [smallScreen, setSmallScreen] = useState(false);
    const [navList, setNavList] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkScreenSize = () => {
        setSmallScreen(window.innerWidth <= 750);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const showNavList = () => {
        setNavList(prevValue => !prevValue);
    };

    const navToHome = () => {
        const currentRoute = window.location.pathname;
        if(currentRoute === '/about' || currentRoute === '/contact' || currentRoute ==='/thingsIveDone' || currentRoute === '/hireMe'){
            navigate('/home');
        }else {
            navigate('/')
        }
    }

    const navToAbout = () => {

        navigate('/about');
    }


    const navToContact = () => {

        navigate('/contact');
    }

    const navToThingsIveDone = () => {

        navigate('/thingsIveDone');
    }

    const navToHireMe = () => {
        navigate('/hireMe')
    }
    
    const ActualNavBar = () => {
        return(
            <div className = {!smallScreen ? "header-nav-bar-content" : "header-nav-bar-content-small-screen"}>
            <a className = {!smallScreen ? "nav-bar-content" : "nav-bar-content-list"} id = {!smallScreen ? "nav-bar-content-1" : "nav-bar-content-1-small"} href = "javascript:;" onClick={navToHome}>
                Home
            </a>
            <a className = {!smallScreen ? "nav-bar-content" : "nav-bar-content-list"} id = "nav-bar-content-2" href = "javascript:;" onClick={navToAbout}>
                About
            </a>
            <a className = {!smallScreen ? "nav-bar-content" : "nav-bar-content-list"} id = "nav-bar-content-3" href = "javascript:;" onClick={navToContact}>
                Contact
            </a>
            <a className = {!smallScreen ? "nav-bar-content" : "nav-bar-content-list"} id = "nav-bar-content-4" href = "javascript:;" onClick={navToThingsIveDone}>
                Stuff I've done
            </a>
            <a className = {!smallScreen ? "nav-bar-content" : "nav-bar-content-list"} id = "nav-bar-content-5" href = "javascript:;" onClick={navToHireMe}>
                Hire me
            </a>
            </div>
        );
    }

   
    const ToggleNavList = () => {
        return(
            <>
            {
                !navList ? 
                <div className = "header-nav-content-ham-and-nav-list">
                    <FaBars className = "header-nav-bar-content-hamburger" onClick = {showNavList}/>
                </div> : 
                <div className = "header-nav-content-ham-and-nav-list">
                    <FaBars className = "header-nav-bar-content-hamburger" onClick = {showNavList}/>
                    <ActualNavBar className/>
                </div>
            }
            </>
        )
    }
    return(
        <div>{!smallScreen ? <ActualNavBar/>
             :
            <div className='header-nav-bar-content'>
                <ToggleNavList/>
            </div>
            }
        </div>
    )
}

export default NavBar;