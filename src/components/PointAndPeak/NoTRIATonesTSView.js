import CheckPowerSource2 from "../TroubleshootingCards/CheckPowerSource2";
import SwapTRIA2 from "../TroubleshootingCards/SwapTRIA2";
import SwapModem2 from "../TroubleshootingCards/SwapModem2";
import CheckCableRun from "../TroubleshootingCards/CheckCableRun";

import "../../styles/PointAndPeak/NoTRIATonesTSView.css";

const NoTRIATonesTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="no-tria-tones-ts-view">
            {
                (selectTSCard[0] && <CheckPowerSource2 handleBackButton={handleBackButton}/>) ||
                (selectTSCard[1] && <SwapTRIA2 handleBackButton={handleBackButton}/>) ||
                (selectTSCard[2] && <SwapModem2 handleBackButton={handleBackButton}/>) ||
                (selectTSCard[3] && <CheckCableRun handleBackButton={handleBackButton}/>)
            }
        </div>
    );
}

export default NoTRIATonesTSView;