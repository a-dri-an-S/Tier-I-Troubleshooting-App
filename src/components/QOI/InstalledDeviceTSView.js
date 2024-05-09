import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import InvalidDevice from "../TroubleshootingCards/InvalidDevice";

import "../../styles/QOI/InstalledDeviceTSView.css";

const InstalledDeviceTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="invalid-device-ts-view">
            {
                (selectTSCard[0] && <InvalidDevice />)
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

export default InstalledDeviceTSView;