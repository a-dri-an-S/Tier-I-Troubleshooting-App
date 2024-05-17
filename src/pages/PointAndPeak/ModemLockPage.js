import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/PointAndPeak/ModemLockPage.css";

const ModemLockPage = () => {
    return (
        <div className="modem-lock-page">
            <h1 className="modem-lock-title">Unable to Achieve Modem Lock</h1>
            <p className="modem-lock-desc">(Can't get past network entry)</p>
            <div className="modem-lock-cards-cont">

                <Link className="link" to="chkoutg/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Check for Outages</h2>
                    </div>
                </Link>
                <Link className="link" to="mdmkey/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Check the Modem Key</h2>
                    </div>
                </Link>
                <Link className="link" to="chkpwr/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Check the Power Source</h2>
                    </div>
                </Link>
                <Link className="link" to="elazskw/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Check Elevation, Azimuth and Skew</h2>
                    </div>
                </Link>
                <Link className="link" to="los/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Check Line of Sight(LOS)</h2>
                    </div>
                </Link>
                <Link className="link" to="plmmst/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Check for a Plumb Mast</h2>
                    </div>
                </Link>
                <Link className="link" to="swptria/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Swap TRIA</h2>
                    </div>
                </Link>
                <Link className="link" to="swpmdm/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Swap Modem</h2>
                    </div>
                </Link>
                <Link className="link" to="chkrfl/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Check Reflector</h2>
                    </div>
                </Link>
                <Link className="link" to="beam/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Check for Correct Beam Assignment</h2>
                    </div>
                </Link>
                <Link className="link" to="chkcbl/">
                    <div className="modem-lock-card" >
                        <h2 className="modem-lock-card-title">Check Cable Run</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton />
        </div>
    );
}

export default ModemLockPage;