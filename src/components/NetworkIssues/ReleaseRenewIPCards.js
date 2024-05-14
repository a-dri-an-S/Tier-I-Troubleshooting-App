import CardBackButton from "../CardBackButton";

import "../../styles/NetworkIssues/ReleaseRenewIPCards.css";

const ReleaseRenewIPCards = ({ handleReleaseRenewIPSelect, handleTSCardsBackButton }) => {
    return (
        <div className="release-renew-ip-cards-sect">
            <h1 className="release-renew-ip-cards-title">Release/Renew IP Address</h1>
            <p className="release-renew-ip-title-desc">Release and renew IP address with one of the following methods:</p>
            <div className="release-renew-ip-cards-cont">
                <div
                    className="release-renew-ip-card"
                    id="0"
                    onClick={(e) => handleReleaseRenewIPSelect(e)}
                >
                    <h2 className="release-renew-ip-card-title">Modem GUI</h2>
                </div>
                <div
                    className="release-renew-ip-card"
                    id="1"
                    onClick={(e) => handleReleaseRenewIPSelect(e)}
                >
                    <h2 className="release-renew-ip-card-title">Windows OS</h2>
                </div>
                <div
                    className="release-renew-ip-card"
                    id="2"
                    onClick={(e) => handleReleaseRenewIPSelect(e)}
                >
                    <h2 className="release-renew-ip-card-title">MAC OS</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleTSCardsBackButton}/>
        </div>
    );
}

export default ReleaseRenewIPCards;