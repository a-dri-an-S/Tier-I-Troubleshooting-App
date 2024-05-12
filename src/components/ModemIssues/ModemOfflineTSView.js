import SwapPowerSupply from "../TroubleshootingCards/SwapPowerSupply";
import CheckPowerSource1 from "../TroubleshootingCards/CheckPowerSource1";
import SwapTRIA from "../TroubleshootingCards/SwapTRIA";
import SwapModem from "../TroubleshootingCards/SwapModem";

import "../../styles/ModemIssues/ModemOfflineTSView.css";

const ModemOfflineTSView = ({ selectTSCard, handleBackButton }) => {

    return (
        <div className="modem-offline-ts-view">
            {
                (selectTSCard[0] && <SwapPowerSupply handleBackButton={handleBackButton}/>) ||
                (selectTSCard[1] && <CheckPowerSource1 handleBackButton={handleBackButton}/>) ||
                (selectTSCard[2] && <SwapTRIA handleBackButton={handleBackButton}/>) ||
                (selectTSCard[3] && <SwapModem handleBackButton={handleBackButton}/>)
            }
        </div>
    );
}

export default ModemOfflineTSView;