import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import PowerCycleModem from "../TroubleshootingCards/PowerCycleModem";

import "../../styles/QOI/SoftwareTSView.css";

const SoftwareTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="software-ts-view">
            {
                (selectTSCard[0] && <PowerCycleModem />)
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

export default SoftwareTSView;