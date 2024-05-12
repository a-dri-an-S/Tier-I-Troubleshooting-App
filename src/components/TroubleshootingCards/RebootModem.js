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
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default RebootModem;