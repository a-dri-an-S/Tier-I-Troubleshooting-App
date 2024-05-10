import "../../styles/TroubleshootCard.css"

const CheckForOutages2 = () => {
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
        </div>
    );
}

export default CheckForOutages2;