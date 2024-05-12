import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const SpeedTestFails = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
        <h1 className="troubleshoot-title">Speed Test Fails to Run Assessment</h1>
        <div className="troubleshoot-card">
            <ul className="troubleshoot-list">
                <li className="troubleshoot-list-item">
                    Re-run the test again in case of error.
                </li>
                <li className="troubleshoot-list-item">
                    If it fails to run the 2nd time, check the outage board for any beam impairments or outages.
                </li>
                <li className="troubleshoot-list-item">
                    If no outages or congestion on the beam, escalate to Tier II for TAC support.
                </li>
                <li className="troubleshoot-list-item">
                    If there are outages or congestion, customer will have to wait until it resolves for speeds to return to normal.
                </li>
            </ul>
        </div>
        <TSCardBackButton handleBackButton={handleBackButton} />
    </div>
    );
}

export default SpeedTestFails;