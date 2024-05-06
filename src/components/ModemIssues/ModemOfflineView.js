import { useState } from "react";

import ModemOfflineCards from "./ModemOfflineCards";
import ModemOfflineTSView from "./ModemOfflineTSView";

const ModemOfflineView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false]);

    function handleModemOfflineSelect(e) {
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
        <section className="modem-offline-view">
            {
                troubleshootChange ?
                    <ModemOfflineTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <ModemOfflineCards handleModemOfflineSelect={handleModemOfflineSelect} />

            }
        </section>
    );
}

export default ModemOfflineView;