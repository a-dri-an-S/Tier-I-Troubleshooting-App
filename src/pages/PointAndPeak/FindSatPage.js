import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/PointAndPeak/FindSatPage.css";

const FindSatPage = ({ toggleDark }) => {

    const toggleTitle = `find-sat-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `find-sat-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="find-sat-page">
            <h1 className={toggleTitle}>Unable to Find the Satellite or Beam</h1>
            <div className="find-sat-cards-cont">
                <Link className="link" to="mdmkey/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Check the Modem Key</h2>
                    </div>
                </Link>
                <Link className="link" to="chkpwr/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Check the Power Source</h2>
                    </div>
                </Link>
                <Link className="link" to="elazskw/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Check Elevation, Azimuth and Skew</h2>
                    </div>
                </Link>
                <Link className="link" to="los/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Check Line of Sight(LOS)</h2>
                    </div>
                </Link>
                <Link className="link" to="plmmst/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Check for a Plumb Mast</h2>
                    </div>
                </Link>
                <Link className="link" to="swptria/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Swap TRIA</h2>
                    </div>
                </Link>
                <Link className="link" to="swpmdm/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Swap Modem</h2>
                    </div>
                </Link>
                <Link className="link" to="chkrfl/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Check Reflector</h2>
                    </div>
                </Link>
                <Link className="link" to="beam/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Check for Correct Beam Assignment</h2>
                    </div>
                </Link>
                <Link className="link" to="chkcbl/">
                    <div className={toggleCard} >
                        <h2 className="find-sat-card-title">Check Cable Run</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default FindSatPage;