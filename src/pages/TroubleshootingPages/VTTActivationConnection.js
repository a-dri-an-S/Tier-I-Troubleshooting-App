import "../../styles/TroubleshootCard.css"

import TSCardBackButton from "./TSCardBackButton";

const VTTActivationConnection = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">VTT Activation - Connection Issues</h1>
            <div className="troubleshoot-card">
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
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default VTTActivationConnection;