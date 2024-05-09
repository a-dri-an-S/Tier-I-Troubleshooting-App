import { useState } from "react";

import EquipmentCards from "./EquipmentCards";
import EquipmentTSView from "./EquipmentTSView";

const EquipmentView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false]);

    function handleEquipmentSelect(e) {
        const idx = e.target.id;
        const updatedState = selectTSCard.map((el, i) => {
            if (i === +idx) {
                return true;
            } else {
                return false;
            }
        });
        setTroubleshootChange(true);
        setSelectTSCard(updatedState);
    }

    function handleBackButton() {
        setTroubleshootChange(false);
        setSelectTSCard([false, false, false, false]);
    }

    return (
        <section className="equip-view">
            {
                troubleshootChange ?
                    <EquipmentTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <EquipmentCards handleEquipmentSelect={handleEquipmentSelect}/>
            }
        </section>
    );
}

export default EquipmentView;