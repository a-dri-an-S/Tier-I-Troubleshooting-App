import "../../styles/TroubleshootCard.css"

const WindowsOS = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Windows OS</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        If tech has access to a Windows PC, they can release/renew IP address through terminal/command prompt.
                    </li>
                    <li className="troubleshoot-list-item">
                        Type cmd in Windows search field next to start up menu and open Command Prompt.
                    </li>
                    <li className="troubleshoot-list-item">
                        Once Command Prompt has opened, type ipconfig /release  and hit enter to release IP address.
                    </li>
                    <li className="troubleshoot-list-item">
                        Then type ipconfig /renew to and hit enter to renew IP address.
                    </li>
                    <li className="troubleshoot-list-item">
                        If this fails, escalate to Tier II for TAC support.
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default WindowsOS;