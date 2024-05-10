import "../../styles/TroubleshootCard.css"

import TSCardBackButton from "./TSCardBackButton";

const CheckForOutages2 = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check for Outages</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Check the outage board for any beam outages or impairments.
                    </li>
                    <li className="troubleshoot-list-item">
                        If there are outages or impairments, escalate to Tier II for further assistance.
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default CheckForOutages2;