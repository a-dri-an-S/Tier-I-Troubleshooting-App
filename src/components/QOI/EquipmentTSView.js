import CheckCableRun2 from "../TroubleshootingCards/CheckCableRun2";
import CheckGround from "../TroubleshootingCards/CheckGround";
import ShortCableTest from "../TroubleshootingCards/ShortCableTest";
import ReplaceCable from "../TroubleshootingCards/ReplaceCable"

const EquipmentTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="equip-ts-view">
            {
                (selectTSCard[0] && <CheckCableRun2 handleBackButton={handleBackButton} />) ||
                (selectTSCard[1] && <CheckGround handleBackButton={handleBackButton} />) ||
                (selectTSCard[2] && <ShortCableTest handleBackButton={handleBackButton} />) ||
                (selectTSCard[3] && <ReplaceCable handleBackButton={handleBackButton} />)
            }
        </div>
    );
}

export default EquipmentTSView;