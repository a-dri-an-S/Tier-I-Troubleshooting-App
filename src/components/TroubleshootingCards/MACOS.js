import "../../styles/TroubleshootCard.css"

const MACOS = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">MAC OS</h1>
            <div className="troubleshoot-card">
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
                        If this fails, escalate to Tier II for TAC support.
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default MACOS;