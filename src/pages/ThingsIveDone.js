import ListOfThingsIveDone from '../components/ListofThingsIveDone';
import NavBar from '../components/NavBar';
import '../styles/LandingPage.css';
import '../styles/ThingsIveDone.css';

function ThingsIveDone(){
    return(
    <>
    <div className="header-container">
            <div className = "inner-container">
                <NavBar/>
                <ListOfThingsIveDone/>
            </div>
        </div>
    </>
    )
}

//add navbar to this page

export default ThingsIveDone;