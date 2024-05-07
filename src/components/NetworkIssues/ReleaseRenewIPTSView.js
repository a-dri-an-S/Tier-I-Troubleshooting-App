import ModemGUI from "../TroubleshootingCards/ModemGUI";
import WindowsOS from "../TroubleshootingCards/WindowsOS";
import MACOS from "../TroubleshootingCards/MACOS";

const ReleaseRenewIPTSView = ({ selectTSCard }) => {
    return (
        <div className="release-renew-ip-ts-view">
            {
                (selectTSCard[0] && <ModemGUI />) ||
                (selectTSCard[1] && <WindowsOS />) ||
                (selectTSCard[2] && <MACOS />)
            }
        </div>
    );
}

export default ReleaseRenewIPTSView;