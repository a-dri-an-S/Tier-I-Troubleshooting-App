import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
                (selectTSCard[0] && <CheckBeamOnModem />) ||
                (selectTSCard[1] && <CheckForOutages />) ||
                (selectTSCard[2] && <CheckPowerSource2 />) ||
                (selectTSCard[3] && <CheckLOS />) ||
                (selectTSCard[4] && <PointAndPeak />) || 
                (selectTSCard[5] && <CheckForCorrectBeam />) ||
                (selectTSCard[6] && <SwapTRIA2 />) ||
                (selectTSCard[7] && <SwapModem2 />) ||
                (selectTSCard[8] && <CheckCableRun />) || 
                (selectTSCard[9] && <CheckReflector />) 
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

export default AntennaPointingTSView;