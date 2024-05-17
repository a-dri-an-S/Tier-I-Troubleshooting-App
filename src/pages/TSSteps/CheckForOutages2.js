import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckForOutages2 = () => {
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
                        Check the outage board for any beam outages or impairments.
                    </li>
                    <li className="troubleshoot-list-item">
                        If there are outages or impairments, escalate to Tier II for further assistance.
                    </li>
                    <li className="troubleshoot-list-item">
                        If there are no outages, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton />
        </div>
    );
}

export default CheckForOutages2;