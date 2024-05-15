import CheckSANOutages from "../TroubleshootingCards/CheckSANOutages";
import PointAndPeak from "../TroubleshootingCards/PointAndPeak";
import SwapTRIA2 from "../TroubleshootingCards/SwapTRIA2";
import SwapModem2 from "../TroubleshootingCards/SwapModem2";

const PeakExitTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="ap-afterburner-ts-view">
            {
                (selectTSCard[0] && <CheckSANOutages handleBackButton={handleBackButton}/>) ||
                (selectTSCard[1] && <PointAndPeak handleBackButton={handleBackButton}/>) ||
                (selectTSCard[2] && <SwapTRIA2 handleBackButton={handleBackButton}/>) ||
                (selectTSCard[3] && <SwapModem2 handleBackButton={handleBackButton}/>)
            }
        </div>
    );
}

export default PeakExitTSView;