import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


import SwapPowerSupply from "../TroubleshootingCards/SwapPowerSupply";
import CheckPowerSource from "../TroubleshootingCards/CheckPowerSource";
import SwapTRIA from "../TroubleshootingCards/SwapTRIA";
import SwapModem from "../TroubleshootingCards/SwapModem";

import "../../styles/ModemIssues/ModemOfflineTSView.css";


const ModemOfflineTSView = ({ selectTSCard, handleBackButton }) => {

    return (
        <div className="modem-offline-ts-view">
            {
                (selectTSCard[0] && <SwapPowerSupply />) ||
                (selectTSCard[1] && <CheckPowerSource />) ||
                (selectTSCard[2] && <SwapTRIA />) ||
                (selectTSCard[3] && <SwapModem />)
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

export default ModemOfflineTSView;