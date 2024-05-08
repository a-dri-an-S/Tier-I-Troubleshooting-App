import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
                (selectTSCard[0] && <CheckForOutages />) ||
                (selectTSCard[1] && <CheckModemKey />) ||
                (selectTSCard[2] && <CheckPowerSource2 />) ||
                (selectTSCard[3] && <CheckElAzSkew />) ||
                (selectTSCard[4] && <CheckLOS />) ||
                (selectTSCard[5] && <CheckForPlumbMast />) ||
                (selectTSCard[6] && <SwapTRIA2 />) ||
                (selectTSCard[7] && <SwapModem2 />) ||
                (selectTSCard[8] && <CheckReflector />) ||
                (selectTSCard[9] && <CheckForCorrectBeam />) ||
                (selectTSCard[10] && <CheckCableRun />)
            }
            <button
                className="back-btn"
                onClick={() => handleBackButton()}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>
    );
}

export default ModemLockTSView;