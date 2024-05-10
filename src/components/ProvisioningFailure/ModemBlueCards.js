import CardBackButton from "../CardBackButton";

import "../../styles/ProvisioningFailure/ModemBlueCards.css";

const ModemBlueCards = ({ handleModemBlueSelect, handleCardsBackButton }) => {
    return (
        <div className="modem-blue-cards-sect">
            <h1 className="modem-blue-cards-title">Modem Status Light: Blue</h1>
            <div className="modem-blue-cards-cont">
                <div
                    className="modem-blue-card"
                    id="0"
                    onClick={(e) => handleModemBlueSelect(e)}
                >
                    <h2 className="modem-blue-card-title">Check for Outages</h2>
                </div>
                <div
                    className="modem-blue-card"
                    id="1"
                    onClick={(e) => handleModemBlueSelect(e)}
                >
                    <h2 className="modem-blue-card-title">Check CRM for Account Errors</h2>
                </div>
                <div
                    className="modem-blue-card"
                    id="2"
                    onClick={(e) => handleModemBlueSelect(e)}
                >
                    <h2 className="modem-blue-card-title">VTT Activation - Connection Issues</h2>
                </div>
                <div
                    className="modem-blue-card"
                    id="3"
                    onClick={(e) => handleModemBlueSelect(e)}
                >
                    <h2 className="modem-blue-card-title">VTT Activation - Other Issues</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton} />
        </div>
    );
}

export default ModemBlueCards;