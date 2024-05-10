import { useState } from "react";

import ModemFlashingWhiteCards from "./ModemFlashingWhiteCards";
import ModemFlashingWhiteTSView from "./ModemFlashingWhiteTSView";

const ModemFlashingWhiteView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false]);

    function handleModemFlashingWhiteSelect(e) {
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
        setSelectTSCard([false]);
    }

    return (
        <section className="modem-flashing-white-view">
            {
                troubleshootChange ?
                    <ModemFlashingWhiteTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <ModemFlashingWhiteCards handleModemFlashingWhiteSelect={handleModemFlashingWhiteSelect} />
            }
        </section>
    );
}

export default ModemFlashingWhiteView;