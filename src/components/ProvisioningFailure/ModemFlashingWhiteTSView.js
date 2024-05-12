import PointAndPeak2 from "../TroubleshootingCards/PointAndPeak2";

import "../../styles/ProvisioningFailure/ModemFlashingWhiteTSView.css";

const ModemFlashingWhiteTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="modem-flashing-white-ts-view">
            {
                selectTSCard[0] && <PointAndPeak2 handleBackButton={handleBackButton}/>
            }
        </div>
    );
}

export default ModemFlashingWhiteTSView;