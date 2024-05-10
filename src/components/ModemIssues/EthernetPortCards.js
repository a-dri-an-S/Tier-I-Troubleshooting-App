import CardBackButton from "../CardBackButton";

import "../../styles/ModemIssues/EthernetPortCards.css";

const EthernetPortCards = ({ handleEthernetPortSelect, handleCardsBackButton }) => {
    return (
        <div className="eth-port-cards-sect">
            <h1 className="modem-offline-cards-title">Ethernet ports not working</h1>
            <div className="eth-port-cards-cont">
                <div
                    className="eth-port-card"
                    id="0"
                    onClick={(e) => handleEthernetPortSelect(e)}
                >
                    <h2 className="eth-port-card-title">Reboot Modem</h2>
                </div>
                <div
                    className="eth-port-card"
                    id="1"
                    onClick={(e) => handleEthernetPortSelect(e)}
                >
                    <h2 className="eth-port-card-title">Test all ethernet ports</h2>
                </div>
                <div
                    className="eth-port-card"
                    id="2"
                    onClick={(e) => handleEthernetPortSelect(e)}
                >
                    <h2 className="eth-port-card-title">Test ethernet ports with different ethernet cable</h2>
                </div>
                <div
                    className="eth-port-card"
                    id="3"
                    onClick={(e) => handleEthernetPortSelect(e)}
                >
                    <h2 className="eth-port-card-title">Test ethernet ports with different device</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton} />
        </div>
    );
}

export default EthernetPortCards;