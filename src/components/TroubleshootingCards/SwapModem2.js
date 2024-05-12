import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const SwapModem2 = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
        <h1 className="troubleshoot-title">Swap Modem</h1>
        <div className="troubleshoot-card">
            <ul className="troubleshoot-list">
                <li className="troubleshoot-list-item">
                    Swap with a new modem.
                </li>
            </ul>
        </div>
        <TSCardBackButton handleBackButton={handleBackButton} />
    </div>
    );
}

export default SwapModem2;