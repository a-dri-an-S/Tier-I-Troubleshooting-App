import GoBackButton from "../../components/GoBackButton";
import "../../styles/ModemIssues/ModemOfflinePage.css";

const ModemOfflinePage = () => {
    return (
        <section className="modem-offline-page">
            <h1 className="modem-offline-title">Modem Offline (Status Light Red)</h1>
            <div className="modem-offline-cards-cont">
                <div
                    className="modem-offline-card"
                    id="0"
                >
                    <h2 className="modem-offline-card-title">Swap Power Supply</h2>
                </div>
                <div
                    className="modem-offline-card"
                    id="1"
                >
                    <h2 className="modem-offline-card-title">Check Power Source</h2>
                </div>
                <div
                    className="modem-offline-card"
                    id="2"
                >
                    <h2 className="modem-offline-card-title">Swap TRIA</h2>
                </div>
                <div
                    className="modem-offline-card"
                    id="3"
                >
                    <h2 className="modem-offline-card-title">Swap Modem</h2>
                </div>
            </div>
            <GoBackButton />
        </section>
    );
}

export default ModemOfflinePage;