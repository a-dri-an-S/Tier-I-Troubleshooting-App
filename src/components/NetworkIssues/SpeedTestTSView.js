// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import SpeedTestFails from "../TroubleshootingCards/SpeedTestFails";
import SpeedTestSlow from "../TroubleshootingCards/SpeedTestSlow";
import SpeedTestAdvertised from "../TroubleshootingCards/SpeedTestAdvertised";

const SpeedTestTSView = ({ selectTSCard }) => {
    return (
        <div className="speed-test-ts-view">
            {
                (selectTSCard[0] && <SpeedTestFails />) ||
                (selectTSCard[1] && <SpeedTestSlow />) ||
                (selectTSCard[2] && <SpeedTestAdvertised />)
            }
            
        </div>
    );
}

export default SpeedTestTSView;