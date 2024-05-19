import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckWifiSSID = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check if WiFi SSID is set to Private</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Modem can be either active or not active on the account for this step.
                    </li>
                    <li className="troubleshoot-list-item">
                        Tech can check router settings through modem GUI, but will need a computer or laptop with an ethernet connection
                    </li>
                    <li className="troubleshoot-list-item">
                        SB2+ modem GUI access: 192.168.1.1:8080
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item">Username and Password: admin</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        VWG modem GUI access: 192.168.100.1
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Username and Password: admin</li>
                            <li className="troubleshoot-list-item-item">Password: printed on modem sticker</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Go to WiFi settings in modem GUI and change SSID broadcast from 'Private' to 'Public'
                    </li>
                    <li className="troubleshoot-list-item">
                        If the tech doesn't have a way to access the modem GUI via ethernet, they can factory reset modem by holding 'reset' button for 60 seconds.
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

export default CheckWifiSSID;