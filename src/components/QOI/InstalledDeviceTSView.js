import InvalidDevice from "../TroubleshootingCards/InvalidDevice";

import "../../styles/QOI/InstalledDeviceTSView.css";

const InstalledDeviceTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="invalid-device-ts-view">
            {
                (selectTSCard[0] && <InvalidDevice handleBackButton={handleBackButton} />)
            }
        </div>
    );
}

export default InstalledDeviceTSView;