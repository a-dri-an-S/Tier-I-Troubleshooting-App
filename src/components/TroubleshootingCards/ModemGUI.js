import "../../styles/TroubleshootCard.css"

const ModemGUI = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Modem GUI</h1>
            <div className="troubleshoot-card">
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
                        If this fails, escalate to Tier II for TAC support.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ModemGUI;