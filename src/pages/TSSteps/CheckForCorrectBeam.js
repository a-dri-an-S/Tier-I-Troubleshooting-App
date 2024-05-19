import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckForCorrectBeam = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check for Correct Beam Assignment</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Confirm with the tech the address is correct and escalate to Tier II to check if beam assigned is correct.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If Tier II finds a better beam, have the tech point to that beam.</li>
                            <li className="troubleshoot-list-item-item">If If tech is able to find the signal, have the tech point and peak to get the modem online.</li>
                            <li className="troubleshoot-list-item-item">Tier II will request a beam reassignment to the new beam.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Only check if its a new install or if the account has been active for less than a year.
                    </li>
                    <li className="troubleshoot-list-item">
                    Tech cannot activate modem until the beam is reassigned.
                    <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Please wait for Tier II to confirm beam reassignment before the tech activates the modem.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If the beam assignment is correct, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default CheckForCorrectBeam;