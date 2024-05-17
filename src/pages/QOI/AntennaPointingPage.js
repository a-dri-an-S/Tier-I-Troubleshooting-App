import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/AntennaPointingPage.css";

const AntennaPointingPage = () => {
    return (
        <section className="ap-page">
            <h1 className="ap-title">Antenna Pointing</h1>
            <div className="ap-cards-cont">
                <Link className="link" to="beam/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Check if Modem is Locked on Assigned Beam</h2>
                    </div>
                </Link>
                <Link className="link" to="chkoutg/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Check for Outages</h2>
                    </div>
                </Link>
                <Link className="link" to="chkpwr/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Check the Power Source</h2>
                    </div>
                </Link>
                <Link className="link" to="los/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Check the Line of Sight (LOS)</h2>
                    </div>
                </Link>
                <Link className="link" to="pnp/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Point and Peak</h2>
                    </div>
                </Link>
                <Link className="link" to="chkbeam/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Check for Correct Beam Assignment</h2>
                    </div>
                </Link>
                <Link className="link" to="swptria/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Swap TRIA</h2>
                    </div>
                </Link>
                <Link className="link" to="swpmdm/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Swap Modem</h2>
                    </div>
                </Link>
                <Link className="link" to="chkcbl/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Check the Cable Run</h2>
                    </div>
                </Link>
                <Link className="link" to="chkrfl/">
                    <div className="ap-card" >
                        <h2 className="ap-card-title">Check the Reflector</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton />
        </section>
    );
}

export default AntennaPointingPage;