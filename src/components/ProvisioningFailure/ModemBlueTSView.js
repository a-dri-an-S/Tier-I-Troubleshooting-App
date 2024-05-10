import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import CheckForOutages2 from "../TroubleshootingCards/CheckForOutages2";
import CheckCRMErrors from "../TroubleshootingCards/CheckCRMErrors";
import VTTActivationConnection from "../TroubleshootingCards/VTTActivationConnection";
import VTTActivationOther from "../TroubleshootingCards/VTTActivationOther";

import "../../styles/ProvisioningFailure/ModemBlueTSView.css";

const ModemBlueTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="modem-blue-ts-view">
            {
                (selectTSCard[0] && <CheckForOutages2 />) ||
                (selectTSCard[1] && <CheckCRMErrors />) ||
                (selectTSCard[2] && <VTTActivationConnection />) ||
                (selectTSCard[3] && <VTTActivationOther handleBackButton={handleBackButton}/>)
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

export default ModemBlueTSView;