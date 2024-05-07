import "../../styles/TroubleshootCard.css"

const SpeedTestSlow = () => {
    return (
        <div className="troubleshoot-sect">
        <h1 className="troubleshoot-title">Speed Test Confirms Slow Speeds</h1>
        <div className="troubleshoot-card">
            <ul className="troubleshoot-list">
                <li className="troubleshoot-list-item">
                    If speed test returns slow speeds, check the outage board for any beam impairments or outages.
                </li>
                <li className="troubleshoot-list-item">
                    If no outages or congestion on the beam, escalate to Tier II for TAC support.
                </li>
                <li className="troubleshoot-list-item">
                    If there are outages or congestion, customer will have to wait until it resolves for speeds to return to normal.
                </li>
            </ul>
        </div>
    </div>
    );
}

export default SpeedTestSlow;