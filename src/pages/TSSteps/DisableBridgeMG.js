import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const DisableBridgeMG = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Disable Bridge Mode (Modem GUI)</h1>
            <div className={toggleCard}>
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
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default DisableBridgeMG;