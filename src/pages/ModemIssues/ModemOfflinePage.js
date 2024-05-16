import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/ModemIssues/ModemOfflinePage.css";

const ModemOfflinePage = () => {
    return (
        <section className="modem-offline-page">
            <h1 className="modem-offline-title">Modem Offline (Status Light Red)</h1>
            <div className="modem-offline-cards-cont">

                <Link className="link" to="pwrsup/">
                    <div className="modem-offline-card" >
                        <h2 className="modem-offline-card-title">Swap Power Supply</h2>
                    </div>
                </Link>

                <Link className="link" to="pwrsrc/">
                    <div className="modem-offline-card" >
                        <h2 className="modem-offline-card-title">Check Power Source</h2>
                    </div>
                </Link>

                <Link className="link" to="swptria/">
                    <div className="modem-offline-card" >
                        <h2 className="modem-offline-card-title">Swap TRIA</h2>
                    </div>
                </Link>

                <Link className="link" to="swpmodem/">
                    <div className="modem-offline-card" >
                        <h2 className="modem-offline-card-title">Swap Modem</h2>
                    </div>
                </Link>

            </div>
            <GoBackButton />
        </section>
    );
}

export default ModemOfflinePage;