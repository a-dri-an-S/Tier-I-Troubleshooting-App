import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/ModemIssues/ModemOfflinePage.css";

const ModemOfflinePage = ({ toggleDark }) => {

    const toggleTitle = `modem-offline-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `modem-offline-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="modem-offline-page">
            <h1 className={toggleTitle}>Modem Offline (Status Light Red)</h1>
            <div className="modem-offline-cards-cont">
                <Link className="link" to="pwrsup/">
                    <div className={toggleCard} >
                        <h2 className="modem-offline-card-title">Swap Power Supply</h2>
                    </div>
                </Link>
                <Link className="link" to="pwrsrc/">
                    <div className={toggleCard} >
                        <h2 className="modem-offline-card-title">Check Power Source</h2>
                    </div>
                </Link>
                <Link className="link" to="swptria/">
                    <div className={toggleCard} >
                        <h2 className="modem-offline-card-title">Swap TRIA</h2>
                    </div>
                </Link>
                <Link className="link" to="swpmodem/">
                    <div className={toggleCard} >
                        <h2 className="modem-offline-card-title">Swap Modem</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default ModemOfflinePage;