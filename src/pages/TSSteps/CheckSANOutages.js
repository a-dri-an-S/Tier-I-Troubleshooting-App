import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckSANOutages = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleLink = `troubleshoot-link ${toggleDark ? 'dark-ts-link' : 'light-ts-link'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;


    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check for SAN Outages</h1>
            <a 
                className={toggleLink}
                href="https://viasatservices.statuspage.io"
                target="_blank"
                rel="noreferrer"
            >Outage Board Link</a>
            <div className={toggleCard}>
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
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default CheckSANOutages;