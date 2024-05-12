import CheckForOutages from "../TroubleshootingCards/CheckForOutages";
import CheckModemKey from "../TroubleshootingCards/CheckModemKey";
import CheckPowerSource2 from "../TroubleshootingCards/CheckPowerSource2";
import CheckElAzSkew from "../TroubleshootingCards/CheckElAzSkew";
import CheckLOS from "../TroubleshootingCards/CheckLOS";
import CheckForPlumbMast from "../TroubleshootingCards/CheckForPlumbMast";
import SwapTRIA2 from "../TroubleshootingCards/SwapTRIA2";
import SwapModem2 from "../TroubleshootingCards/SwapModem2";
import CheckReflector from "../TroubleshootingCards/CheckReflector";
import CheckForCorrectBeam from "../TroubleshootingCards/CheckForCorrectBeam";
import CheckCableRun from "../TroubleshootingCards/CheckCableRun";

import "../../styles/PointAndPeak/ModemLockTSView.css"

const ModemLockTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="modem-lock-ts-view">
            {
                (selectTSCard[0] && <CheckForOutages handleBackButton={handleBackButton} />) ||
                (selectTSCard[1] && <CheckModemKey handleBackButton={handleBackButton} />) ||
                (selectTSCard[2] && <CheckPowerSource2 handleBackButton={handleBackButton} />) ||
                (selectTSCard[3] && <CheckElAzSkew handleBackButton={handleBackButton} />) ||
                (selectTSCard[4] && <CheckLOS handleBackButton={handleBackButton} />) ||
                (selectTSCard[5] && <CheckForPlumbMast handleBackButton={handleBackButton} />) ||
                (selectTSCard[6] && <SwapTRIA2 handleBackButton={handleBackButton} />) ||
                (selectTSCard[7] && <SwapModem2 handleBackButton={handleBackButton} />) ||
                (selectTSCard[8] && <CheckReflector handleBackButton={handleBackButton} />) ||
                (selectTSCard[9] && <CheckForCorrectBeam handleBackButton={handleBackButton} />) ||
                (selectTSCard[10] && <CheckCableRun handleBackButton={handleBackButton} />)
            }
        </div>
    );
}

export default ModemLockTSView;