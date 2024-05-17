import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckModemKey = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check the Modem Key</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        If the modem key is incorrect, re-enter the modem key.
                    </li>
                    <li className="troubleshoot-list-item">
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton />
        </div>
    );
}

export default CheckModemKey;