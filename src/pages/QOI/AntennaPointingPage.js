import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/AntennaPointingPage.css";

const AntennaPointingPage = ({ toggleDark }) => {

    const toggleTitle = `ap-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `ap-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="ap-page">
            <h1 className={toggleTitle}>Antenna Pointing</h1>
            <div className="ap-cards-cont">
                <Link className="link" to="beam/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Check if Modem is Locked on Assigned Beam</h2>
                    </div>
                </Link>
                <Link className="link" to="chkoutg/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Check for Outages</h2>
                    </div>
                </Link>
                <Link className="link" to="chkpwr/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Check the Power Source</h2>
                    </div>
                </Link>
                <Link className="link" to="los/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Check the Line of Sight (LOS)</h2>
                    </div>
                </Link>
                <Link className="link" to="pnp/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Point and Peak</h2>
                    </div>
                </Link>
                <Link className="link" to="chkbeam/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Check for Correct Beam Assignment</h2>
                    </div>
                </Link>
                <Link className="link" to="swptria/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Swap TRIA</h2>
                    </div>
                </Link>
                <Link className="link" to="swpmdm/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Swap Modem</h2>
                    </div>
                </Link>
                <Link className="link" to="chkcbl/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Check the Cable Run</h2>
                    </div>
                </Link>
                <Link className="link" to="chkrfl/">
                    <div className={toggleCard} >
                        <h2 className="ap-card-title">Check the Reflector</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default AntennaPointingPage;