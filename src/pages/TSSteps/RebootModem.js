import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const RebootModem = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Reboot Modem</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Have the tech reboot the modem on site or reboot through ESVT.
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

export default RebootModem;