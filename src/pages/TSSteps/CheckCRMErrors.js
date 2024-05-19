import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckCRMErrors = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check CRM for Account Errors</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Check under Sales {'>'} Order Items to check for any errors that could be preventing tech from activating modem.
                    </li>
                    <li className="troubleshoot-list-item">
                        If errors are found, escalate to Tier II to clear errors and have tech retry again.
                    </li>
                    <li className="troubleshoot-list-item">
                        If there are no errors found, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default CheckCRMErrors;