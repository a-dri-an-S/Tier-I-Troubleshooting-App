import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const VTTActivationConnection = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>VTT Activation - Connection Issues</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Disconnect from the modem's WiFi and log out of app.
                    </li>
                    <li className="troubleshoot-list-item">
                        Reconnect to the modem's WiFi and log back into the app.
                    </li>
                    <li className="troubleshoot-list-item">
                        Select the Work Order or use the Service Activation tab and retry activation.
                    </li>

                    <li className="troubleshoot-list-item">
                        If issues continue, uninstall/reinstall app.
                    </li>
                    <li className="troubleshoot-list-item">
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default VTTActivationConnection;