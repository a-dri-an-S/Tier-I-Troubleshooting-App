import "../../styles/ProvisioningFailure/ModemFlashingWhiteCards.css"

const ModemFlashingWhiteCards = ({ handleModemFlashingWhiteSelect }) => {
    return (
        <div className="modem-flashing-white-cards-sect">
            <h1 className="modem-flashing-white-cards-title">Modem Status Light: Flashing White</h1>
            <div className="modem-flashing-white-cards-cont">
                <div 
                    className="modem-flashing-white-card"
                    id="0"
                    onClick={(e) => handleModemFlashingWhiteSelect(e)}
                >
                    <h2 className="modem-flashing-white-card-title">Point And Peak</h2>
                </div>
            </div>
        </div>
    );
}

export default ModemFlashingWhiteCards;