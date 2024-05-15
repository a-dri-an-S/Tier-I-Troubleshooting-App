import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const WindowsOS = ({ handleBackButton }) => {
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
                        If the tech is unable to release and renew IP address, please move on to the other troubleshooting steps.
                    </li>
                    <li className="troubleshoot-list-item">
                        If the tech was able to release and renew IP address without resolution, please swap the modem.
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default WindowsOS;