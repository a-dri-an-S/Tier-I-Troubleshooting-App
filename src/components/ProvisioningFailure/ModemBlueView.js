import { useState } from "react";

import ModemBlueCards from "./ModemBlueCards";
import ModemBlueTSView from "./ModemBlueTSView";

const ModemBlueView = ({ handleCardsBackButton }) => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false]);

    function handleModemBlueSelect(e) {
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
        <section className="modem-blue-view">
            {
                troubleshootChange ?
                    <ModemBlueTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <ModemBlueCards
                        handleModemBlueSelect={handleModemBlueSelect}
                        handleCardsBackButton={handleCardsBackButton}
                    />
            }
        </section>
    );
}

export default ModemBlueView;