import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import PointAndPeak2 from "../TroubleshootingCards/PointAndPeak2";

import "../../styles/ProvisioningFailure/ModemFlashingWhiteTSView.css";

const ModemFlashingWhiteTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="modem-flashing-white-ts-view">
            {
                selectTSCard[0] && <PointAndPeak2 />
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

export default ModemFlashingWhiteTSView;