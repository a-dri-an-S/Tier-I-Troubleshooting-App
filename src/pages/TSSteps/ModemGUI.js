import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const ModemGUI = ({ toggleDark }) => {
    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Modem GUI</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Tech can access the modem GUI and release/renew IP address.
                    </li>
                    <li className="troubleshoot-list-item">
                        SB2+ modem GUI access: 192.168.1.1:8080
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Username and Password: admin</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        VWG modem GUI access: 192.168.100.1
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Username: admin</li>
                            <li className="troubleshoot-list-item-item">Password: printed on modem sticker</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If the tech is unable to access the modem GUI, please move on to the other troubleshooting steps.
                    </li>
                    <li className="troubleshoot-list-item">
                        If the tech was able to release and renew IP address without resolution, please swap the modem.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default ModemGUI;