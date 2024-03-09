import HeaderNavBar from './HeaderNavBar';
import HeaderContent from './HeaderContent';
import '../styles/HeaderStructure.css'
function HeaderStructure() {


    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className="header-nav-bar">
                        <HeaderNavBar/>
                    </div>

                    <div className="header-content">
                        <div className="header-content-item">
                            <HeaderContent/>
                        </div>
                    </div>
                    <div className="header-bottom-part">

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderStructure;