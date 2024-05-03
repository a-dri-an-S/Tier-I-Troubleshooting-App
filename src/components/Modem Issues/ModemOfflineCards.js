import "../../styles/Modem Issues/ModemOfflineCards.css";

const ModemOfflineCards = ({ handleModemOfflineSelect }) => {
    return (
        <div className="modem-offline-cards-sect">
            <h1 className="modem-issue-title">Modem Offline (Status Light Red)</h1>
            <div className="modem-offline-cards-cont">
                <div 
                    className="modem-offline-card"
                    id="0"
                    onClick={(e) => handleModemOfflineSelect(e)}
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
                    id="2"
                >
                    <h2 className="modem-offline-card-title">Swap Modem</h2>
                </div>
            </div>

        </div>
    );
}

export default ModemOfflineCards;