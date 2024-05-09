import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import CheckCableRun2 from "../TroubleshootingCards/CheckCableRun2";
import CheckGround from "../TroubleshootingCards/CheckGround";
import ShortCableTest from "../TroubleshootingCards/ShortCableTest";
import ReplaceCable from "../TroubleshootingCards/ReplaceCable"

const EquipmentTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="equip-ts-view">
            {
                (selectTSCard[0] && <CheckCableRun2 />) ||
                (selectTSCard[1] && <CheckGround />) ||
                (selectTSCard[2] && <ShortCableTest />) ||
                (selectTSCard[3] && <ReplaceCable />)
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

export default EquipmentTSView;