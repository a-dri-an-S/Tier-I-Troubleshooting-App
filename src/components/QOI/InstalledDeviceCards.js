import CardBackButton from "../CardBackButton";

import "../../styles/QOI/InvalidDeviceCards.css";

const InstalledDeviceCards = ({ handleInvalidDeviceSelect, handleCardsBackButton }) => {
    return (
        <div className="invalid-device-cards-sect">
            <h1 className="invalid-device-cards-title">Installed Devices</h1>
            <div className="invalid-device-cards-cont">
                <div
                    className="invalid-device-card"
                    id="0"
                    onClick={(e) => handleInvalidDeviceSelect(e)}
                >
                    <h2 className="invalid-device-card-title">Invalid Device</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton} />

        </div>
    );
}

export default InstalledDeviceCards;
















