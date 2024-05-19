import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const SpeedTestSlow = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleLink = `troubleshoot-link ${toggleDark ? 'dark-ts-link' : 'light-ts-link'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Speed Test Confirms Slow Speeds</h1>
            <a
                className={toggleLink}
                href="https://viasatservices.statuspage.io"
                target="_blank"
                rel="noreferrer"
            >Outage Board Link</a>
            <div className={toggleCard}>
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
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default SpeedTestSlow;