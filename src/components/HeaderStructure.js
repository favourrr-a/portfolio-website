import { useNavigate } from 'react-router-dom';
import HeaderNavBar from './HeaderNavBar';
import '../styles/HeaderStructure.css'
function HeaderStructure() {

    const navigate = useNavigate();

    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className="header-nav-bar">
                        <HeaderNavBar/>
                    </div>

                    <div className="header-content">
                        <div className="header-content-item" id="header-content-item-1">

                        </div>
                        <div className="header-content-item" id="header-content-item-2">

                        </div>
                        <div className="header-content-item" id="header-content-item-3">

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