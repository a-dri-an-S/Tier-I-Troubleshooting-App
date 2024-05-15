import { useState } from "react";

import PnPStepsCards from "./PnPStepsCards";
import PnPStepsTSView from "./PnPStepsTSView";

const PnPStepsView = ({ handleTSCardsBackButton }) => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false]);

    function handlePnPStepsSelect(e) {
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
        setSelectTSCard([false, false, false]);
    }

    return (
        <section className="pnp-steps-view">
            {
                troubleshootChange ?
                    <PnPStepsTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <PnPStepsCards
                        handlePnPStepsSelect={handlePnPStepsSelect}
                        handleTSCardsBackButton={handleTSCardsBackButton}
                    />
            }
        </section>
    );
}

export default PnPStepsView;