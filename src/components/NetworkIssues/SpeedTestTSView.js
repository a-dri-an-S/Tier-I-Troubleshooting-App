import SpeedTestFails from "../TroubleshootingCards/SpeedTestFails";
import SpeedTestSlow from "../TroubleshootingCards/SpeedTestSlow";
import SpeedTestAdvertised from "../TroubleshootingCards/SpeedTestAdvertised";

const SpeedTestTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="speed-test-ts-view">
            {
                (selectTSCard[0] && <SpeedTestFails handleBackButton={handleBackButton} />) ||
                (selectTSCard[1] && <SpeedTestSlow handleBackButton={handleBackButton} />) ||
                (selectTSCard[2] && <SpeedTestAdvertised handleBackButton={handleBackButton} />)
            }
        </div>
    );
}

export default SpeedTestTSView;