import RebootModem from "../TroubleshootingCards/RebootModem";
import TestEthernetPorts from "../TroubleshootingCards/TestEthernetPorts";
import TestEthernetCables from "../TroubleshootingCards/TestEthernetCables";
import TestDifferentDevices from "../TroubleshootingCards/TestDifferentDevices";

const EthernetPortTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="eth-port-ts-view">
            {
                (selectTSCard[0] && <RebootModem handleBackButton={handleBackButton}/>) ||
                (selectTSCard[1] && <TestEthernetPorts handleBackButton={handleBackButton}/>) ||
                (selectTSCard[2] && <TestEthernetCables handleBackButton={handleBackButton}/>) ||
                (selectTSCard[3] && <TestDifferentDevices handleBackButton={handleBackButton}/>)
            }
        </div>
    );
}

export default EthernetPortTSView;