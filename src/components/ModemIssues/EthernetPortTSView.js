import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import RebootModem from "../TroubleshootingCards/RebootModem";
import TestEthernetPorts from "../TroubleshootingCards/TestEthernetPorts";
import TestEthernetCables from "../TroubleshootingCards/TestEthernetCables";
import TestDifferentDevices from "../TroubleshootingCards/TestDifferentDevices";

const EthernetPortTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="eth-port-ts-view">
            {
                (selectTSCard[0] && <RebootModem />) ||
                (selectTSCard[1] && <TestEthernetPorts />) ||
                (selectTSCard[2] && <TestEthernetCables />) ||
                (selectTSCard[3] && <TestDifferentDevices />)
            }
            <button
                className="back-btn"
                onClick={() => handleBackButton()}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>
    );
}

export default EthernetPortTSView;