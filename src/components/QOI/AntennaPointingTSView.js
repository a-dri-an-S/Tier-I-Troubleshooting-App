import CheckBeamOnModem from "../TroubleshootingCards/CheckBeamOnModem";
import CheckForOutages from "../TroubleshootingCards/CheckForOutages";
import CheckPowerSource2 from "../TroubleshootingCards/CheckPowerSource2";
import CheckLOS from "../TroubleshootingCards/CheckLOS"
import PointAndPeak from "../TroubleshootingCards/PointAndPeak";
import CheckForCorrectBeam from "../TroubleshootingCards/CheckForCorrectBeam";
import SwapTRIA2 from "../TroubleshootingCards/SwapTRIA2";
import SwapModem2 from "../TroubleshootingCards/SwapModem2";
import CheckCableRun from "../TroubleshootingCards/CheckCableRun";
import CheckReflector from "../TroubleshootingCards/CheckReflector";

import "../../styles/QOI/AntennaPointingTSView.css";

const AntennaPointingTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="antenna-pointing-ts-view">
            {
                (selectTSCard[0] && <CheckBeamOnModem handleBackButton={handleBackButton} />) ||
                (selectTSCard[1] && <CheckForOutages handleBackButton={handleBackButton} />) ||
                (selectTSCard[2] && <CheckPowerSource2 handleBackButton={handleBackButton} />) ||
                (selectTSCard[3] && <CheckLOS handleBackButton={handleBackButton} />) ||
                (selectTSCard[4] && <PointAndPeak handleBackButton={handleBackButton} />) ||
                (selectTSCard[5] && <CheckForCorrectBeam handleBackButton={handleBackButton} />) ||
                (selectTSCard[6] && <SwapTRIA2 handleBackButton={handleBackButton} />) ||
                (selectTSCard[7] && <SwapModem2 handleBackButton={handleBackButton} />) ||
                (selectTSCard[8] && <CheckCableRun handleBackButton={handleBackButton} />) ||
                (selectTSCard[9] && <CheckReflector handleBackButton={handleBackButton} />)
            }
        </div>
    );
}

export default AntennaPointingTSView;