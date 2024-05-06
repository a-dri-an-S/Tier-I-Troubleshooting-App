import { useState } from "react";

import EthernetPortCards from "./EthernetPortCards";
import EthernetPortTSView from "./EthernetPortTSView";

const EthernetPortView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false]);

    function handleEthernetPortSelect(e) {
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
        <section className="eth-port-view">
            {
                troubleshootChange ?
                    <EthernetPortTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <EthernetPortCards handleEthernetPortSelect={handleEthernetPortSelect} />
            }
        </section>
    );
}

export default EthernetPortView;