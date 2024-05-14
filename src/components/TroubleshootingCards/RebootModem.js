import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const RebootModem = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Reboot Modem</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Have the tech reboot the modem on site or reboot through ESVT.
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

export default RebootModem;