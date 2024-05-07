import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import CheckDataUse from "../TroubleshootingCards/CheckDataUse";
import CheckForLowSignal from "../TroubleshootingCards/CheckForLowSignal";
import SpeedTestView from "./SpeedTestView";

import "../../styles/NetworkIssues/SlowSpeedsTSView.css";

const SlowSpeedsTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="slow-speeds-ts-view">
            {
                (selectTSCard[0] && <CheckDataUse />) ||
                (selectTSCard[1] && <CheckForLowSignal />) ||
                (selectTSCard[2] && <SpeedTestView />) 
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

export default SlowSpeedsTSView;