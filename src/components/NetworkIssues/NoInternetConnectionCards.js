import CardBackButton from "../CardBackButton";

import "../../styles/NetworkIssues/NoInternetConnectionCards.css"

const NoInternetConnectionCards = ({ handleNoInternetConnectionSelect, handleCardsBackButton }) => {
    return (
        <div className="no-internet-connection-cards-sect">
            <h1 className="no-internet-connection-cards-title">No Internet Connection</h1>
            <div className="no-internet-connection-cards-cont">
                <div
                    className="no-internet-connection-card"
                    id="0"
                    onClick={(e) => handleNoInternetConnectionSelect(e)}
                >
                    <h2 className="no-internet-connection-card-title">Reboot or Factory Reset Modem</h2>
                </div>
                <div
                    className="no-internet-connection-card"
                    id="1"
                    onClick={(e) => handleNoInternetConnectionSelect(e)}
                >
                    <h2 className="no-internet-connection-card-title">Release/Renew IP Address</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton} />
        </div>
    );
}

export default NoInternetConnectionCards;