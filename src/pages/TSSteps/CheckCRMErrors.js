import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckCRMErrors = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check CRM for Account Errors</h1>
            <div className="troubleshoot-card">
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
            <TSGoBackButton />
        </div>
    );
}

export default CheckCRMErrors;