import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const SwapModem = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
        <h1 className="troubleshoot-title">Swap Modem</h1>
        <div className="troubleshoot-card">
            <ul className="troubleshoot-list">
                <li className="troubleshoot-list-item">
                    Swap with a new modem.
                </li>
                <li className="troubleshoot-list-item">
                    If modem status light is blue, please have the tech continue with activating the modem.
                </li>
                <li className="troubleshoot-list-item">
                    If modem status light is flash white, please refer to Modem Lock troubleshooting.
                    <ul className="troubleshoot-list-item">
                        <li className="troubleshoot-list-item-item">LINK - Point and Peak: Modem Lock</li>
                    </ul>
                </li>
                <li className="troubleshoot-list-item">
                    If modem status light continues red, please continue with 'Modem Offline' troubleshooting steps.
                </li>
            </ul>
        </div>
        <TSCardBackButton handleBackButton={handleBackButton} />

    </div>
    );
}

export default SwapModem;