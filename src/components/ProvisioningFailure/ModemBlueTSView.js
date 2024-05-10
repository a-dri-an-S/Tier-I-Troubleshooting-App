import CheckForOutages2 from "../TroubleshootingCards/CheckForOutages2";
import CheckCRMErrors from "../TroubleshootingCards/CheckCRMErrors";
import VTTActivationConnection from "../TroubleshootingCards/VTTActivationConnection";
import VTTActivationOther from "../TroubleshootingCards/VTTActivationOther";

import "../../styles/ProvisioningFailure/ModemBlueTSView.css";

const ModemBlueTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="modem-blue-ts-view">
            {
                (selectTSCard[0] && <CheckForOutages2 handleBackButton={handleBackButton} />) ||
                (selectTSCard[1] && <CheckCRMErrors handleBackButton={handleBackButton} />) ||
                (selectTSCard[2] && <VTTActivationConnection handleBackButton={handleBackButton} />) ||
                (selectTSCard[3] && <VTTActivationOther handleBackButton={handleBackButton} />)
            }
        </div>
    );
}

export default ModemBlueTSView;