import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css";

const CheckSANOutages = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check for SAN Outages</h1>
            <a 
                className="troubleshoot-link"
                href="https://viasatservices.statuspage.io"
                target="_blank"
                rel="noreferrer"
            >Outage Board Link</a>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        In ESVT, load the MAC address and check the for SAN's associated to the beam
                    </li>
                    <li className="troubleshoot-list-item">
                        In the outage board, check for current posted outages and check if there are any SAN outages.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If there is a SAN outage and it is associated to the beam the modem is locked and assigned to, please escalate to Tier II for support.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If there are no outages, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default CheckSANOutages;