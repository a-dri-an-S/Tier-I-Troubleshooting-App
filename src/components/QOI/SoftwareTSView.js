import PowerCycleModem from "../TroubleshootingCards/PowerCycleModem";

import "../../styles/QOI/SoftwareTSView.css";

const SoftwareTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="software-ts-view">
            {
                (selectTSCard[0] && <PowerCycleModem handleBackButton={handleBackButton}/>)
            }
        </div>
    );
}

export default SoftwareTSView;