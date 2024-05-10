import { useState } from "react";

import ModemLockCards from "./ModemLockCards";
import ModemLockTSView from "./ModemLockTSView";

const ModemLockView = ({ handleCardsBackButton }) => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false, false, false, false, false, false, false, false]);

    function handleModemLockSelect(e) {
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
        setSelectTSCard([false, false, false, false, false, false, false, false, false, false, false]);
    }

    return (
        <div className="modem-lock-view">
            {
                troubleshootChange ?
                    <ModemLockTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <ModemLockCards 
                        handleModemLockSelect={handleModemLockSelect} 
                        handleCardsBackButton={handleCardsBackButton}
                    />
            }
        </div>
    );
}

export default ModemLockView;