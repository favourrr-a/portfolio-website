import '../styles/AboutPageContent.css';
function AboutPageContent(){
return(
    <div className='about-content-container'>
        <div className = "group">
            <h2 className='group-heading'>
                Introduction
            </h2>
            <p className='group-content'>
                My name is Favour Ackonu. I am based in Ghana. 
            </p>
        </div>

        <div className = "group">
            <h2 className='group-heading'>
                Skills
            </h2>
            <p className='group-content'>
                <ul className='skills-list'>
                    <li className = "skills-list-item"> Java </li>
                    <li className = "skills-list-item"> Java </li>
                    <li className = "skills-list-item"> Java </li>
                    <li className = "skills-list-item"> Java </li>
                    <li className = "skills-list-item"> Java </li>
                </ul>
            </p>
        </div>

        <div className = "group">
            <h2 className='group-heading'>
                Education
            </h2>
            <p className='group-content'>
                Bsc. Computer Science with Mathematics
            </p>
        </div>
    </div>
)
}

export default AboutPageContent;