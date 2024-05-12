import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css";

const ShortCableTest = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Short Cable Test</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Perform a short cable test", "Cable bypassing the ground block, directly connected between the modem and TRIA.
                    </li>

                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default ShortCableTest;