import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const TestEthernetCables = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Test Ethernet Ports with Different Ethernet Cable</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Have the tech use a different ethernet cable, but same device to not introduce more variables when troubleshooting port connectivity.
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
                        If the does not resolve the issue, please move on to the other troubleshooting steps for 'Ethernet Ports Not Working'.
                    </li>
                    <li className="troubleshoot-list-item">
                        If other troubleshooting steps have been tried without resolution, please swap the modem.
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default TestEthernetCables;