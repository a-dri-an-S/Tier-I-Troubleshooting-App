import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const CheckForOutages = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check for Outages</h1>
            <a 
                className="troubleshoot-link"
                href="https://viasatservices.statuspage.io"
                target="_blank"
                rel="noreferrer"
            >Outage Board Link</a>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Check the outage board for any outages posted for the assigned beam.
                    </li>
                    <li className="troubleshoot-list-item">
                        Ask the tech about the weather on site.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If there are weather issues preventing the tech from achieving modem lock, have the tech wait until weather clears or reschedule.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default CheckForOutages;