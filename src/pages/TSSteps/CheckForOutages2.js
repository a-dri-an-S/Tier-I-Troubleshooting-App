import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckForOutages2 = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleLink = `troubleshoot-link ${toggleDark ? 'dark-ts-link' : 'light-ts-link'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check for Outages</h1>
            <a 
                className={toggleLink}
                href="https://viasatservices.statuspage.io"
                target="_blank"
                rel="noreferrer"
            >Outage Board Link</a>
            <div className={toggleCard}>
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
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default CheckForOutages2;