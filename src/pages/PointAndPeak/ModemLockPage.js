import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/PointAndPeak/ModemLockPage.css";

const ModemLockPage = ({ toggleDark }) => {

    const toggleTitle = `modem-lock-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleDesc = `modem-lock-desc ${toggleDark ? 'dark-desc' : 'light-desc'}`

    const toggleCard = `modem-lock-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <div className="modem-lock-page">
            <h1 className={toggleTitle}>Unable to Achieve Modem Lock</h1>
            <p className={toggleDesc}>(Can't get past network entry)</p>
            <div className="modem-lock-cards-cont">

                <Link className="link" to="chkoutg/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Check for Outages</h2>
                    </div>
                </Link>
                <Link className="link" to="mdmkey/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Check the Modem Key</h2>
                    </div>
                </Link>
                <Link className="link" to="chkpwr/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Check the Power Source</h2>
                    </div>
                </Link>
                <Link className="link" to="elazskw/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Check Elevation, Azimuth and Skew</h2>
                    </div>
                </Link>
                <Link className="link" to="los/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Check Line of Sight(LOS)</h2>
                    </div>
                </Link>
                <Link className="link" to="plmmst/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Check for a Plumb Mast</h2>
                    </div>
                </Link>
                <Link className="link" to="swptria/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Swap TRIA</h2>
                    </div>
                </Link>
                <Link className="link" to="swpmdm/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Swap Modem</h2>
                    </div>
                </Link>
                <Link className="link" to="chkrfl/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Check Reflector</h2>
                    </div>
                </Link>
                <Link className="link" to="beam/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Check for Correct Beam Assignment</h2>
                    </div>
                </Link>
                <Link className="link" to="chkcbl/">
                    <div className={toggleCard} >
                        <h2 className="modem-lock-card-title">Check Cable Run</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default ModemLockPage;