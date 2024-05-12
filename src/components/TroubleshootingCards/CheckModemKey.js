import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const CheckModemKey = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check the Modem Key</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        If the modem key is incorrect, re-enter the modem key.
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default CheckModemKey;