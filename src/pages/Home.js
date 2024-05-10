import LandingPage from '../components/LandingPage';
function Home({argument}){
    return(
        <>
            {
                argument ? <LandingPage argument = {argument}/> : <LandingPage/>
            }
        </>
    );
}

export default Home;