import { useState } from "react";

import AntennaPointingCards from "./AntennaPointingCards";
import AntennaPointingTSView from "./AntennaPointingTSView";

const AntennaPointingView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false, false, false, false, false, false, false]);

    function handleAntennaPointingSelect(e) {
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
        setSelectTSCard([false, false, false, false, false, false, false, false, false, false]);
    }

    return (
        <section className="antenna-pointing-view">
            {
                troubleshootChange ?
                    <AntennaPointingTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <AntennaPointingCards handleAntennaPointingSelect={handleAntennaPointingSelect} />
            }
        </section>
    );
}

export default AntennaPointingView;