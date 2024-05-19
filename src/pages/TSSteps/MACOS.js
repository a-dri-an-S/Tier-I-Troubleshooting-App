import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const MACOS = ({ toggleDark }) => {
    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>MAC OS</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Tech can release/renew IP address through system settings.
                    </li>
                    <li className="troubleshoot-list-item">
                        Click on Apple menu {'>'} System Settings, then click Network in the sidebar.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">(You may need to scroll down.)</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Click the network service that needs a renewed IP address on the right, then click Details.
                    </li>
                    <li className="troubleshoot-list-item">
                        Click TCP/IP, then click Renew DHCP Lease. and click OK.
                    </li>
                    <li className="troubleshoot-list-item">
                        If the tech is unable to release and renew IP address, please move on to the other troubleshooting steps.
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

export default MACOS;