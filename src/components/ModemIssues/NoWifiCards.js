import CardBackButton from "../CardBackButton";

import "../../styles/ModemIssues/NoWifiCards.css";

const NoWifiCards = ({ handleNoWifiSelect, handleCardsBackButton }) => {
    return (
        <div className="no-wifi-cards-sect">
            <h1 className="no-wifi-cards-title">No Wi-Fi</h1>
            <div className="no-wifi-cards-cont">
                <div
                    className="no-wifi-card"
                    id="0"
                    onClick={(e) => handleNoWifiSelect(e)}
                >
                    <h2 className="no-wifi-card-title">Disable bridge mode (Modem GUI)</h2>
                </div>
                <div
                    className="no-wifi-card"
                    id="1"
                    onClick={(e) => handleNoWifiSelect(e)}
                >
                    <h2 className="no-wifi-card-title">Check for Viasat Shield Premium</h2>
                </div>
                <div
                    className="no-wifi-card"
                    id="2"
                    onClick={(e) => handleNoWifiSelect(e)}
                >
                    <h2 className="modem-offline-card-title">Check if WiFi SSID is set to Private</h2>
                </div>
                <div
                    className="no-wifi-card"
                    id="3"
                    onClick={(e) => handleNoWifiSelect(e)}
                >
                    <h2 className="no-wifi-card-title">Disable Bridge Mode through ESVT</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton} />

        </div>
    );
}

export default NoWifiCards;