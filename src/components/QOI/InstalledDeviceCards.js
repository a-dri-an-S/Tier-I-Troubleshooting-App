import CardBackButton from "../CardBackButton";

import "../../styles/QOI/InvalidDeviceCards.css";

const InstalledDeviceCards = ({ handleInvalidDeviceSelect, handleCardsBackButton }) => {
    return (
        <div className="modem-offline-cards-sect">
            <h1 className="modem-offline-cards-title">Installed Devices</h1>
            <div className="modem-offline-cards-cont">
                <div
                    className="modem-offline-card"
                    id="0"
                    onClick={(e) => handleInvalidDeviceSelect(e)}
                >
                    <h2 className="modem-offline-card-title">Invalid Device</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton} />

        </div>
    );
}

export default InstalledDeviceCards;
















