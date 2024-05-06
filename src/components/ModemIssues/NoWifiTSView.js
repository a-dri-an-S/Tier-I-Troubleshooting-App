import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import DisableBridgeModeModemGUI from "../TroubleshootingCards/DisableBridgeModeModemGUI";
import ViasatShieldPremium from "../TroubleshootingCards/ViasatSheildPremium";
import CheckWifiSSID from "../TroubleshootingCards/CheckWifiSSID";
import DisableBridgeModeESVT from "../TroubleshootingCards/DisableBridgeModeESVT";



const NoWifiTSView = ({ selectTSCard, handleBackButton }) => {
    
    return (
        <div className="no-wifi-ts-view">
            {
                (selectTSCard[0] && <DisableBridgeModeModemGUI />) || 
                (selectTSCard[1] && <ViasatShieldPremium />) ||
                (selectTSCard[2] && <CheckWifiSSID />) ||
                (selectTSCard[3] && <DisableBridgeModeESVT />)
            }
            <button
                className="back-btn"
                onClick={() => handleBackButton()}
            >
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
        </div>
    );
}

export default NoWifiTSView;