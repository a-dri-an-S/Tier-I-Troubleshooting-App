import DisableBridgeModeModemGUI from "../TroubleshootingCards/DisableBridgeModeModemGUI";
import ViasatShieldPremium from "../TroubleshootingCards/ViasatSheildPremium";
import CheckWifiSSID from "../TroubleshootingCards/CheckWifiSSID";
import DisableBridgeModeESVT from "../TroubleshootingCards/DisableBridgeModeESVT";



const NoWifiTSView = ({ selectTSCard, handleBackButton }) => {
    
    return (
        <div className="no-wifi-ts-view">
            {
                (selectTSCard[0] && <DisableBridgeModeModemGUI handleBackButton={handleBackButton}/>) || 
                (selectTSCard[1] && <ViasatShieldPremium handleBackButton={handleBackButton}/>) ||
                (selectTSCard[2] && <CheckWifiSSID handleBackButton={handleBackButton}/>) ||
                (selectTSCard[3] && <DisableBridgeModeESVT handleBackButton={handleBackButton}/>)
            }
        </div>
    );
}

export default NoWifiTSView;