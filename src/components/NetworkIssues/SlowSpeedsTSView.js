import CheckDataUse from "../TroubleshootingCards/CheckDataUse";
import CheckForLowSignal from "../TroubleshootingCards/CheckForLowSignal";
import SpeedTestView from "./SpeedTestView";

import "../../styles/NetworkIssues/SlowSpeedsTSView.css";

const SlowSpeedsTSView = ({ selectTSCard, handleBackButton, handleTSCardsBackButton }) => {
    return (
        <div className="slow-speeds-ts-view">
            {
                (selectTSCard[0] && <CheckDataUse handleBackButton={handleBackButton}/>) ||
                (selectTSCard[1] && <CheckForLowSignal handleBackButton={handleBackButton}/>) ||
                (selectTSCard[2] && <SpeedTestView handleTSCardsBackButton={handleTSCardsBackButton}/>) 
            }
        </div>
    );
}

export default SlowSpeedsTSView;