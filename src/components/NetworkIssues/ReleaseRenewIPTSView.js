import ModemGUI from "../TroubleshootingCards/ModemGUI";
import WindowsOS from "../TroubleshootingCards/WindowsOS";
import MACOS from "../TroubleshootingCards/MACOS";

const ReleaseRenewIPTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="release-renew-ip-ts-view">
            {
                (selectTSCard[0] && <ModemGUI handleBackButton={handleBackButton}/>) ||
                (selectTSCard[1] && <WindowsOS handleBackButton={handleBackButton}/>) ||
                (selectTSCard[2] && <MACOS handleBackButton={handleBackButton}/>)
            }
        </div>
    );
}

export default ReleaseRenewIPTSView;