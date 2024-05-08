import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import CheckPowerSource2 from "../TroubleshootingCards/CheckPowerSource2";
import SwapTRIA2 from "../TroubleshootingCards/SwapTRIA2";
import SwapModem2 from "../TroubleshootingCards/SwapModem2";
import CheckCableRun from "../TroubleshootingCards/CheckCableRun";

import "../../styles/PointAndPeak/NoTRIATonesTSView.css";

const NoTRIATonesTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="no-tria-tones-ts-view">
            {
                (selectTSCard[0] && <CheckPowerSource2 />) ||
                (selectTSCard[1] && <SwapTRIA2 />) ||
                (selectTSCard[2] && <SwapModem2 />) ||
                (selectTSCard[3] && <CheckCableRun />)
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

export default NoTRIATonesTSView;