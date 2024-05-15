import PointAndPeak from "../TroubleshootingCards/PointAndPeak";
import SwapTRIA2 from "../TroubleshootingCards/SwapTRIA2";
import SwapModem2 from "../TroubleshootingCards/SwapModem2";

const PnPStepsTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="pnp-steps-ts-view">
            {
                (selectTSCard[0] && <PointAndPeak handleBackButton={handleBackButton}/>) ||
                (selectTSCard[1] && <SwapTRIA2 handleBackButton={handleBackButton}/>) ||
                (selectTSCard[2] && <SwapModem2 handleBackButton={handleBackButton}/>)
                
            }
        </div>
    );
}

export default PnPStepsTSView;