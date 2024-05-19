import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const TestDifferentDevices = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Test ethernet ports with different device</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Have the tech use a different device with an ethernet port when troubleshooting port connectivity.
                    </li>
                    <li className="troubleshoot-list-item">
                        Active Modem: Have the tech try to access a web page on the internet
                    </li>
                    <li className="troubleshoot-list-item">
                        Offline/Non-Active Modem: Have the tech try to access the modem GUI"
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
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
                    <li className="troubleshoot-list-item">
                        If other troubleshooting steps have been tried without resolution, please swap the modem.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default TestDifferentDevices;