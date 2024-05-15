import PnPStepsView from "./PnPStepsView";
import PeakExitView from "./PeakExitView";

const APAfterburnerTSView = ({ selectTSCard, handleTSCardsBackButton }) => {
    return (
        <div className="ap-afterburner-ts-view">
            {
                (selectTSCard[0] && <PnPStepsView handleTSCardsBackButton={handleTSCardsBackButton}/>) ||
                (selectTSCard[1] && <PeakExitView handleTSCardsBackButton={handleTSCardsBackButton}/>)
            }
        </div>
    );
}

export default APAfterburnerTSView;