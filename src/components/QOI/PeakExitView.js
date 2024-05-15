import { useState } from "react";

import PeakExitCards from "./PeakExitCards"
import PeakExitTSView from "./PeakExitTSView";

const PeakExitView = ({ handleTSCardsBackButton }) => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false]);

    function handlePeakExitViewSelect(e) {
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
        <div className="release-renew-ip-view">
            {
                troubleshootChange ?
                    <PeakExitTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <PeakExitCards
                        handlePeakExitViewSelect={handlePeakExitViewSelect}
                        handleTSCardsBackButton={handleTSCardsBackButton}
                    />
            }
        </div>
    );
}

export default PeakExitView;