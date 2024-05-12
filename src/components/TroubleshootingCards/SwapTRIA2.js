import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const SwapTRIA2 = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
        <h1 className="troubleshoot-title">Swap TRIA</h1>
        <div className="troubleshoot-card">
            <ul className="troubleshoot-list">
                <li className="troubleshoot-list-item">
                    Swap with a new TRIA.
                    <ul className="troubleshoot-list-item">
                        <li className="troubleshoot-list-item-item">Point and peak the TRIA.</li>
                    </ul>
                </li>
            </ul>
        </div>
        <TSCardBackButton handleBackButton={handleBackButton} />
    </div>
    );
}

export default SwapTRIA2;