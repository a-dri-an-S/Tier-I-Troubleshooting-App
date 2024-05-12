import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const PointAndPeak = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Point and Peak</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Have the tech point and peak the TRIA.
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light stays red after pointing and peaking, please refer to the modem issues troubleshooting.", "LINK - Modem Issues: Modem Offline
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light turns blue, please have the tech continue with activating the modem.
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light continues to flash white, please refer to Modem Lock troubleshooting.", "LINK - Point and Peak: Modem Lock
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default PointAndPeak;