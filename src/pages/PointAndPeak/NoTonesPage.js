import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/PointAndPeak/NoTonesPage.css";

const NoTonesPage = ({ toggleDark }) => {

    const toggleTitle = `no-tone-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `no-tone-card ${toggleDark ? 'dark-card' : 'light-card'}`;
    
    return (
        <section className="no-tones-page">
            <h1 className={toggleTitle}>No TRIA Tones</h1>
            <div className="no-tone-cards-cont">
                <Link className="link" to="chkpwr/">
                    <div className={toggleCard} >
                        <h2 className="no-tone-card-title">Check Power Source</h2>
                    </div>
                </Link>
                <Link className="link" to="swptria/">
                    <div className={toggleCard} >
                        <h2 className="no-tone-card-title">Swap TRIA</h2>
                    </div>
                </Link>
                <Link className="link" to="swpmdm/">
                    <div className={toggleCard} >
                        <h2 className="no-tone-card-title">Swap Modem</h2>
                    </div>
                </Link>
                <Link className="link" to="chkcbl/">
                    <div className={toggleCard} >
                        <h2 className="no-tone-card-title">Check the Cable Run</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default NoTonesPage;