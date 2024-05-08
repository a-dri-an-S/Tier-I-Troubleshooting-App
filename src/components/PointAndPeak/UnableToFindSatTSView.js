import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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

import "../../styles/PointAndPeak/UnableToFindSatTSView.css";

const UnableToFindSatTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="unable-to-find-sat-ts-view">
            {
                (selectTSCard[0] && <CheckModemKey />) ||
                (selectTSCard[1] && <CheckPowerSource2 />) ||
                (selectTSCard[2] && <CheckElAzSkew />) ||
                (selectTSCard[3] && <CheckLOS />) ||
                (selectTSCard[4] && <CheckForPlumbMast />) ||
                (selectTSCard[5] && <SwapTRIA2 />) ||
                (selectTSCard[6] && <SwapModem2 />) ||
                (selectTSCard[7] && <CheckReflector />) ||
                (selectTSCard[8] && <CheckForCorrectBeam />) ||
                (selectTSCard[9] && <CheckCableRun />)
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

export default UnableToFindSatTSView;