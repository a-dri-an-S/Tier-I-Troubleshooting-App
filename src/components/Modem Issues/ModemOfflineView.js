import { useState } from "react";

import ModemOfflineCards from "./ModemOfflineCards";

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

    return (
        <div className="modem-issue-TS-view">
            {
                troubleshootChange ?
                    <div>Hello</div> :
                    <ModemOfflineCards handleModemOfflineSelect={handleModemOfflineSelect} />

            }
        </div>
    );
}

export default ModemOfflineView;