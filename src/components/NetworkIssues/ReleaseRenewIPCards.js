import "../../styles/NetworkIssues/ReleaseRenewIPCards.css";

const ReleaseRenewIPCards = ({ handleReleaseRenewIPSelect }) => {
    return (
        <div className="release-renew-ip-cards-sect">
            <h1 className="release-renew-ip-cards-title">Release/Renew IP Address</h1>
            <li className="release-renew-ip-title-desc">Release and renew IP address with one of the following methods:</li>
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

        </div>
    );
}

export default ReleaseRenewIPCards;