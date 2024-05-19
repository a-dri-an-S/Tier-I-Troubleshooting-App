import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckForOutages = ({ toggleDark }) => {

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
                        Check the outage board for any outages posted for the assigned beam.
                    </li>
                    <li className="troubleshoot-list-item">
                        Ask the tech about the weather on site.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If there are weather issues preventing the tech from achieving modem lock, have the tech wait until weather clears or reschedule.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If there are no outages or weather related issues on site, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark} />
        </div>
    );
}

export default CheckForOutages;