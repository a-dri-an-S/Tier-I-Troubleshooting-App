import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const DisableBridgeModeModemGUI = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Disable Bridge Mode (Modem GUI)</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Modem can be either active or not active on the account for this step.
                    </li>
                    <li className="troubleshoot-list-item">
                        Tech can disable bridge mode through modem GUI, but will need a computer or laptop with an ethernet connection
                    </li>
                    <li className="troubleshoot-list-item-item">
                        SB2+ modem GUI access: 192.168.1.1:8080
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Username and Password: admin</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        VWG modem GUI access: 192.168.100.1
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Username: admin</li>
                            <li className="troubleshoot-list-item">Password: printed on modem sticker</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Go to bridge mode section in modem GUI and disable.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If disabled, modem will reboot 2 times within a 15 min window.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If this does not get modem out of bridge mode, please move on to the other troubleshooting steps for 'No Wi-Fi'.
                    </li>

                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default DisableBridgeModeModemGUI;